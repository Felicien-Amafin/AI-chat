import bcrypt from "bcryptjs";
import otpGenerator from 'otp-generator';
import crypto from "crypto";
import User from "../models/user.model.js";
import { getSignupErrors, getSigninErrors, generateToken, encryptCred } from "../utils/auth.js";
import { CustomError } from "../utils/class.js";
import { sendVerificationEmail, sendPwdResetLink } from "../nodemailer/emails.js";
import { tryCatch } from "../utils/tryCatch.js";

export const signup = tryCatch(async (req, res) => {
    //Signing up user, using username, email, and password
    const { username, email, password } = req.body;
    
    const errors = getSignupErrors(username, email, password);

    if (errors) {
        throw new CustomError('Certaines informations sont invalides', 400, errors);
    }
  
    const user = await User.findOne({ email });

    if (user) {
        const errorMess = `Veuillez choisir une autre adresse email.`;
        throw new CustomError(errorMess, 400, { email: 'Adresse email déjà utilisée'});
    }
    
    const hashedPsswd = await encryptCred(password);
    
    const emailVerifCode = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });

    const newUser = new User({
        username,
        email,
        password: hashedPsswd,
        emailVerifCode
    });
    await newUser.save();

    sendVerificationEmail(
        `${process.env.CLIENT_URL}/auth/email-verification/${newUser._id}`, 
        newUser.email, 
        emailVerifCode
    );
    
    return res.status(201).json({
        message: "Complètez votre inscription en suivant les instructions envoyées à votre adresse email.",
        user: {
            username: newUser.username,
            email: newUser.email
        }
    });
});

export const signin = tryCatch(async (req, res) => {
    //Logining user by using email, and password
    const { email, password } = req.body;

    const errors = getSigninErrors(email, password);

    if(errors) {
        throw new CustomError('Certaines informations sont invalides', 400, errors);
    }

    const user = await User.findOne({ email });

    const isPwdValid = await bcrypt.compare(password, user?.password || '');

    if(!isPwdValid) {
        throw new CustomError('Mot de passe et/ou email invalide(s)', 400, {});
    }

    if(!user.isEmailVerified) {
        throw new CustomError(`Vous devez valider votre adresse email avant de vous connecter. Suivez les instructions envoyées par mail.`, 401, {});
    }

    const accessToken = generateToken(user._id, process.env.ACCESS_TOKEN_SECRET, '60s');
    const refreshToken = generateToken(user._id, process.env.REFRESH_TOKEN_SECRET, '1d');

    //Encrypting refresh token before saving in db
    const hashedToken = await encryptCred(refreshToken);
    user.refreshToken = hashedToken;
    user.save();

    //set refreshToken in cookie
    res.cookie('jwt', refreshToken, {
        maxAge: 10 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: 'None',
        secure: false,
    });

    return res.status(200).json({
        message: 'Successfully authenticated.', 
        user: { id: user._id, username: user.username },
        accessToken,
    })
});

export const verifyEmail = tryCatch(async (req, res) => {
    //Verifies user's email via a unique code 
    const userId = req.params.userId;
    const { code } = req.body;
    const USER_ID_LENGTH = 24;

    if (userId.length != USER_ID_LENGTH) {
        throw new CustomError('Identifiant utilisateur invalide.', 400, {});
    }

    const user = await User.findOne({ _id: userId });
    
    if (!user) {
        throw new CustomError('Utilisateur introuvable.', 404, {});
    }

    if (user.isEmailVerified && (code === user.emailVerifCode)) {
        return res.status(200).json({
            message: 'Votre adresse email a déjà été confirmée. vous pouvez maintenant vous connecter',
            user: {
                _id: user._id,
                user: user.username
            }
        })
    } 

    if (!code || (code !== user.emailVerifCode)) {
        throw new CustomError(
            'Utilisez le code envoyé à votre adresse email.', 
            400, 
            { code: 'Code invalide'}
        );
    }

    user.isEmailVerified = true;
    user.save();

    return res.status(200).json({
        message: 'Votre adresse email a été confirmée avec succès! Vous pouvez maintenant vous connecter.',
        user: {
            _id: user._id,
            user: user.username
        }
    });
});

export const sendResetEmail = tryCatch(async (req, res) => {
    //Sends password reset links via user's email address
    const { email } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);

    if (!email || !isEmailValid) {
        const errorMess = `Le format d'email est invalide.`
        throw new CustomError(errorMess, 400, { email: 'Email invalide' });
    }

    const user = await User.findOne({ email });

    if (!user) {
        const errorMess = `Pas d'utilisateur associé à cette adresse email.`
        throw new CustomError(errorMess, 404, { email: 'Adresse email inconnue' });
    }

    const token = crypto.randomBytes(10).toString("hex");

    user.resetEmailToken = token;
    user.isPasswordReseted = false;
    await user.save();
    
    await sendPwdResetLink(email, `${process.env.CLIENT_URL}/auth/password-reset/${token}`);
    
    return res.status(200).json({ message: 'Un lien de réinitialisation de mot de passe vous a été envoyé par mail.' });
});

export const resetPwd = tryCatch(async (req, res) => {
    //Resets user's password using a reset token
    const token = req.params.token;
    const { new_password } = req.body;
    const PSSWD_MIN_LENGTH = 6;
 
    const user = await User.findOne({ resetEmailToken: token });

    if (!user) {
        const errorMess = `L'url comporte un token invalide. Utilisez le lien envoyé à votre adresse email, ou obtenez un nouveau lien ci-dessous.`;
        throw new CustomError(errorMess, 401, { isTokenInvalid: true });
    }

    if (!new_password || new_password.length < PSSWD_MIN_LENGTH) {
        const errorMess = `Mot de passe invalide (${PSSWD_MIN_LENGTH} caractères min)`
        throw new CustomError(errorMess, 400, { password: errorMess});
    }

    if(user && user.isPasswordReseted) {
        const errorMess = `Vous devez obtenir un nouveau lien pour réinitialiser votre mot de passe.`;
        throw new CustomError(errorMess, 401, { isTokenInvalid: true });
    }

    const hashedPsswd = await encryptPassword(new_password);
    user.password = hashedPsswd;
    user.isPasswordReseted = true;

    await user.save();

    return res.status(200).json({ message: 'Votre mot de passe a bien été modifié. Vous pouvez maintenant vous connecter' });
});
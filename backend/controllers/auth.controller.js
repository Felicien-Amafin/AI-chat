import jwt from "jsonwebtoken";
import otpGenerator from 'otp-generator';
import crypto from "crypto";
import User from "../models/user.model.js";
import { getSignupErrors, encryptPassword } from "../utils/auth.js";
import { sendVerificationEmail, sendPwdResetLink } from "../nodemailer/emails.js";

export const signup = async (req, res) => {
    //Signing up user, using username, email, and password

    try {
        const { username, email, password } = req.body;
        
        const errors = getSignupErrors(username, email, password);

        if (errors) {
            return res.status(400).json({ message: "Certaines informations sont invalides", errors });
        }

        const user = await User.findOne({ email });

        if (user) {
            return res.status(409).json({ 
                message: "Cette addresse email est déjà associée à un compte d'utilisateur", 
                errors: { email: "Adresse email déjà utilisée." }
            });
        }
        
        const hashedPsswd = await encryptPassword(password);
       
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

    } catch(error) {
        return res.status(500).json({ 
            message: 'Erreur de serveur.', 
        });
    }
}

export const verifyEmail = async (req, res) => {
    //Verifies user's email via a unique code 
    const userId = req.params.userId;
    const { code } = req.body;
    const USER_ID_LENGTH = 24;

    try {
        if (userId.length != USER_ID_LENGTH) {
            return res.status(400).json({ 
                message: 'Identifiant utilisateur invalide',
            });
        }
    
        const user = await User.findOne({ _id: userId });
       
        if (!user) {
             return res.status(404).json({ 
                message: 'Identifiant utilisateur invalide',
            });
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
            return res.status(400).json({ 
                message: 'Code de vérification invalide. Utilisez le code envoyé à votre adresse email.',
                errors: { code: 'Code de vérification invalide.'}
            });
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

    } catch (error) {
        return res.status(500).json({ 
            message: 'Erreur de serveur.', 
        });
    }
}

export const sendResetEmail = async (req, res) => {
    //Sends password reset links via user's email address
    const { email } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);

    if (!email || !isEmailValid) {
        return res.status(400).json({ 
            message: 'Email invalide.',
            errors: { email: 'Email invalide.'}
        });
    }

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ 
                message: 'Utilisateur introuvable',
                errors: { email: `Pas d'utilisateur associé à cette adresse email.`}
            });
        }

        const token = crypto.randomBytes(10).toString("hex");

        user.resetEmailToken = token;
        user.isPasswordReseted = false;
        await user.save();
       
        await sendPwdResetLink(email, `${process.env.CLIENT_URL}/auth/password-reset/${token}`);
        
        return res.status(200).json({ message: 'Un lien de réinitialisation de mot de passe vous a été envoyé par mail.' });

    } catch (error) {
        return res.status(500).json({ 
            message: 'Erreur de serveur.', 
        });
    } 
}
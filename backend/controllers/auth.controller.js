import jwt from "jsonwebtoken";
import otpGenerator from 'otp-generator';
import crypto from "crypto";
import User from "../models/user.model.js";
import { getSignupErrors, encryptPassword } from "../utils/auth.js";
import { sendVerificationEmail } from "../nodemailer/emails.js";

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
       
        const verificationCode = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
    
        const newUser = new User({
            username,
            email,
            password: hashedPsswd,
            verificationCode
        });
        await newUser.save();

        sendVerificationEmail(
            `${process.env.CLIENT_URL}/auth/email-verification/${newUser._id}`, 
            newUser.email, 
            verificationCode
        );
        
        return res.status(201).json({
            message: "Complètez votre inscription en suivant les instructions envoyées à votre adresse email.",
            user: {
                username: newUser.username,
                email: newUser.email
            }
        });

    } catch(error) {
        console.log(error)
        return res.status(500).json({ 
            message: 'Erreur de serveur.', 
        });
    }
}
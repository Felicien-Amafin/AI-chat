import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const getSigninErrors = (email, password)=> {
    //Get input errors in signin process
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = email ? emailRegex.test(email) : '';

    if(!password) errors.password = 'Mot de passe requis';

    if(!email) errors.email = 'Email requis';


    if((email !== '') && !isEmailValid) errors.email = `Format d'email invalide`;

    const isErrors = Object.values(errors).length > 0;

    return isErrors ? errors : null;
}

export const getSignupErrors = (username, email, password)=> {
    //Get input errors in signUp process
    const errors = {};
    const USERNAME_MIN_LENGTH = 5;
    const USERNAME_MAX_LENGTH = 10;
    const PSSWD_MIN_LENGTH = 6;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!username || 
        username.length < USERNAME_MIN_LENGTH || 
        username.length > USERNAME_MAX_LENGTH) {
        errors.username = `Nom d'utilisateur invalide (${USERNAME_MIN_LENGTH} caractères min, ${USERNAME_MAX_LENGTH} max)`;
    }

    const isEmailValid = email ? emailRegex.test(email) : '';
    if(!isEmailValid) errors.email = `Format d'email invalide`;

    if(!password || password.length < PSSWD_MIN_LENGTH) {
        errors.password = `Mot de passe invalide (${PSSWD_MIN_LENGTH} caractères min)`;
    }
    
    const isErrors = Object.values(errors).length > 0;

    return isErrors ? errors : null;
}

export const encryptCred = async (cred)=> {
    //Encrypt password
    const salt = await bcrypt.genSalt(10);
    const hashedCred = await bcrypt.hash(cred, salt);
   
    return hashedCred;
}

export const generateToken = (userId, tokenKey, expiresIn)=> {
    return jwt.sign(
        { 'userId': userId},
        tokenKey,
        { expiresIn: expiresIn }
    )
};

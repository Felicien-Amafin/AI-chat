import bcrypt from "bcryptjs";

export const getSignupErrors = (username, email, password)=> {
    //Get input error in signUp process
    const errors = {};
    const USERNAME_MIN_LENGTH = 5;
    const USERNAME_MAX_LENGTH = 10;
    const PSSWD_MIN_LENGTH = 6;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!username || 
        username.length < USERNAME_MIN_LENGTH || 
        username.length > USERNAME_MAX_LENGTH) {
        errors.username = `Nom d'utilisateur invalide (${USERNAME_MIN_LENGTH} caractères min, ${USERNAME_MAX_LENGTH} max)`;
    }

    const isEmailValid = email ? emailRegex.test(email) : '';
    if (!isEmailValid) errors.email = `Format d'email invalide`;

    if(!password || password.length < PSSWD_MIN_LENGTH) {
        errors.password = `Mot de passe invalide (min ${PSSWD_MIN_LENGTH} caractères)`;
    }
    
    const isErrors = Object.values(errors).length > 0;

    return isErrors ? errors : null;
}

export const encryptPassword = async (password)=> {

    const salt = await bcrypt.genSalt(10);
    const hashedPsswd = await bcrypt.hash(password, salt);
   
    return hashedPsswd;
}
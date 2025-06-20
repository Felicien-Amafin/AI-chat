import { getMailOptions, transporter } from "./nodemailerConfig.js";

export const sendVerificationEmail = async(siteUrl, userEmail, verificationCode)=> {
    //Send a verification email to user after signing up
    try {
        const subject = 'Confirmation de votre addresse email';
        const text = `Cliquez sur ce lien:${siteUrl}, puis entrez le code suivant: ${verificationCode}.`
        const mailOptions = getMailOptions(userEmail, subject, text);

         await transporter.sendMail(mailOptions);
       
    } catch (error) {
        console.log(error);
    }
};

export const sendPwdResetLink = async(userEmail, siteUrl)=> {
    //Send reset link to the user for password reset
    try {
        const subject = 'Password Reset';
        const text = `Please click on the following link to reset your password: ${siteUrl}`;
        const mailOptions = getMailOptions(userEmail, subject, text);

        const info =  await transporter.sendMail(mailOptions);
    } catch (error) {
        console.log(error);
    }
};
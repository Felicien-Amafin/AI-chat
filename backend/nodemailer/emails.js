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
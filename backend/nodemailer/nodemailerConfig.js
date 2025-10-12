import nodemailer from 'nodemailer';
import dotenv from "dotenv";
dotenv.config();

export const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  service: 'gmail',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.APP_PWD,
  },
});


export const getMailOptions = (recipient, subject, text)=> {

    const options = {
      from: process.env.SENDER_EMAIL,
      to: recipient,
      subject: subject,
      text: text,
    }
    
  return options;
};
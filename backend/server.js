import express from "express";
import dotenv from "dotenv"
import sanitize from 'express-mongo-sanitize';
import xss from 'xss-clean';
import rateLimit from 'express-rate-limit';
import cookieParser from "cookie-parser";
import cors from 'cors';
import connectToDb from "./db/mongodbConnection.js";

import authRoutes from "./routes/auth.routes.js";
import categorieRoutes from "./routes/categorie.routes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { verifyAccessTk } from "./middleware/auth.js";

dotenv.config();
const app = express();
const PORT= process.env.PORT || 5000;

//Setting rate access limit to API
const rateLimiter = rateLimit({
    max: 500,
    windowMs: 60 * 60 * 100,
    message: 'Too many requests have been sent from your ip address. Please try in 1 hour.'
})

//Setting middlewares (run before API endpoints)
app.use('/api', rateLimiter);
app.use(
    cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));
app.use(express.json());
app.use(cookieParser());
/* app.use(xss());
app.use(sanitize()); */

//Defining API endpoints
app.use("/api/authentication", authRoutes);
app.use("/api/categories", verifyAccessTk, categorieRoutes);
app.use(errorHandler);

app.listen(PORT, ()=> {
    console.log(`server is running on port ${ PORT }`);
    connectToDb();
});
import express from "express";
import dotenv from "dotenv";
import rateLimit from 'express-rate-limit';
import cookieParser from "cookie-parser";
import cors from 'cors';
import helmet from 'helmet';
import sanitize from "mongo-sanitize"; 
import connectToDb from "./db/mongodbConnection.js";
import authRoutes from "./routes/auth.routes.js";
import categoriesRoutes from "./routes/categories.routes.js";
import chatsRoutes from "./routes/chats.routes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { verifyAccessTk } from "./middleware/auth.js";
import { getCorsOrigin } from "./utils/config.js";

dotenv.config();
const app = express();
const PORT= process.env.PORT || 5000;

const corsOrigin = getCorsOrigin();

//Setting rate access limit to API
const rateLimiter = rateLimit({
  max: 500,
  windowMs: 60 * 60 * 100,
  message: 'Too many requests have been sent from your ip address. Please try in 1 hour.'
})

//Setting middlewares (run before API endpoints)
app.use(helmet()); // Secure HTTP headers
app.use(
  cors({
  credentials: true, // Allow cookies/auth headers
  origin: corsOrigin,// Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],// Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'authorization'], // Allowed request headers
}));
app.use(express.json());// Parse incoming JSON request bodies
app.use(cookieParser());// Parse cookies from incoming requests

app.use((req, res, next) => {// Sanitize user input to prevent NoSQL injection (body, params, and query)
  if (req.body) req.body = sanitize(req.body);
  if (req.params) req.params = sanitize(req.params);
  if (req.query) {
    for (const key of Object.keys(req.query)) {
      req.query[key] = sanitize(req.query[key]);
    }
  }

  next();
});

app.use('/api', rateLimiter);// Apply rate limiting to all /api routes

//Defining API endpoints
app.use("/api/authentication", authRoutes);
app.use("/api/categories", verifyAccessTk, categoriesRoutes);
app.use("/api/chats", verifyAccessTk, chatsRoutes);
app.use(errorHandler);

app.listen(PORT, ()=> {
  console.log(`Server is running on port ${ PORT }`);
  console.log(`CORS Origin configured as: ${corsOrigin} (Mode: ${process.env.NODE_ENV || 'development'})`);
  connectToDb();
});
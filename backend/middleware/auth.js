import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { CustomError } from "../utils/class.js";
import { tryCatch } from "../utils/tryCatch.js";

export const verifyAccessTk = tryCatch(async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader?.startsWith('Bearer ')) {
        const error = new CustomError('Unauthorized', 401, {});
        return next(error);
    }
    //Get token from headers
    const token = authHeader.split(' ')[1];
    
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        async (err, decoded) => {
            if(err) { 
                const error = new CustomError('Unauthorized', 401, {}); 
                return next(error);
            }
            
            //Adding additional checking (if user exists in db)
            const user = await User.findById(decoded.userId);
      
            if(!user) { 
                const error = new CustomError('Unauthorized', 401, {});
                return next(error);
            };
            
            req.user = { id: user._id};
            next();
        }
    )
});


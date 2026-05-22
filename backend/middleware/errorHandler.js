export const errorHandler = (error, req, res, next)=> {
    
    error.statusCode = error?.statusCode || 500;
    
    return res.status(error?.statusCode).json({
        message: error?.message,
        errors: error?.errors
    })
}
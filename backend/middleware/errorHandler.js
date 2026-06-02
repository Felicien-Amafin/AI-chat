export const errorHandler = (error, req, res, next)=> {
    let statusCode = error?.status || error?.statusCode || 500
    let message = error?.message;

    if (statusCode === 503 || statusCode === 429 ) {
        message = "Les serveurs de l'API Google Gemini (Free Tier) subissent actuellement une forte demande. En raison des limites de quotas de la version gratuite, la requête n'a pas pu aboutir. Ce pic de charge est temporaire, veuillez réessayer dans quelques instants.";
    }

    return res.status(statusCode).json({
        message: message,
        errors: error?.errors
    })
}
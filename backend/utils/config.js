export const getCorsOrigin = () => {
    const isProduction = process.env.NODE_ENV === 'production';

    const corsOrigin = isProduction
        ? process.env.PROD_CLIENT_URL
        : process.env.DEV_CLIENT_URL;
    if (!corsOrigin) {
        console.error("ERREUR: L'URL CORS n'est pas définie dans le fichier .env pour cet environnement.");
    }

    return corsOrigin;
};
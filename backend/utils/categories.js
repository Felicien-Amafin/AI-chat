export const getTchatFormErrors = (categorie, title) => {
    //Get chat form's input errors
    const errors = {};
    const CATEGORIE_MAX_LENGTH = 40;
    const CATEGORIE_MIN_LENGTH = 5;
    const TITLE_MAX_LENGTH  = 65;
    const TITLE_MIN_LENGTH  = 5;
    
    if(
        !categorie ||
        categorie.length > CATEGORIE_MAX_LENGTH || 
        categorie.length < CATEGORIE_MIN_LENGTH
    ) {
        errors.categorie = `La catégorie doit être comprise entre ${CATEGORIE_MIN_LENGTH} et ${CATEGORIE_MAX_LENGTH} caractères`;
    }

    if(
        !title ||
        title.length > TITLE_MAX_LENGTH || 
        title.length < TITLE_MIN_LENGTH
    ) {
        errors.title = `Le titre doit être compris entre ${TITLE_MIN_LENGTH} et ${TITLE_MAX_LENGTH} caractères`;
    }

    const isErrors = Object.values(errors).length > 0;

    return isErrors ? errors : null;
}
export const capitalizedFirstChar = (string) => {
    const newString = string.charAt(0).toUpperCase() + string.slice(1);
    return newString;
}

export const getNewDate = () => {
    let date = new Date();
   
    const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };

    const dateFormatee = new Intl.DateTimeFormat('fr-FR', options).format(date);

    return dateFormatee;
}
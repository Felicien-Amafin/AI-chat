
const useFormInputErrorHandler = (error) => {
    let inputErrors;
    let inputErrorMess;

    if(error) {
        inputErrors = error.response.data.errors;
        inputErrorMess = error.response.data.message;
    }

    return { inputErrors, inputErrorMess };
}

export default useFormInputErrorHandler;
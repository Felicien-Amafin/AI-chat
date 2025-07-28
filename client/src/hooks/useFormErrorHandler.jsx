
const useFormErrorHandler = (isClientError, error) => {
    let inputErrors;
    let inputErrorMess;
    
    if(isClientError) {
        inputErrors = error?.response.data.errors;
        inputErrorMess = error?.response.data.message;
    }

    return { inputErrors, inputErrorMess };
}

export default useFormErrorHandler;
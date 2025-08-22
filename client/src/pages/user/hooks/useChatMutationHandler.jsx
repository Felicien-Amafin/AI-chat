import useRequestErrorHandler from "../../../hooks/useRequestErrorHandler";
import useLogoutUser from "./useLogoutUser";

const useChatMutationHandler = ({error, data}) => {
    const { isServerError, isClientError, isForbidden, isUnAuthorized } = useRequestErrorHandler(error); 
    useLogoutUser(isForbidden || isUnAuthorized);

    const formErrors = {};
    let serverError;
    const chatId = data?.data.chat_id;

    if(isClientError) {
        formErrors.inputs = error.response.data.errors
        formErrors.message = error.response.data.message;
    }

    if(isServerError) {
        serverError = 'Erreur interne du serveur. Veuillez réessayer plus tard.';
    }

    return {  
        chatId,
        isClientError, 
        isServerError, 
        formErrors, 
        serverError,
    }
}

export default useChatMutationHandler;
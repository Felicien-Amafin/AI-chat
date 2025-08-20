import useRequestErrorHandler from "../../../hooks/useRequestErrorHandler";
import { useCreateCategoryWithChatMutation } from "../../../services/mutations";
import useLogoutUser from "./useLogoutUser";

const useCreateCategoryWithChat = () => {
  const { mutate, isPending, data, error } = useCreateCategoryWithChatMutation();
  const { isServerError, isClientError, isForbidden, isUnAuthorized } = useRequestErrorHandler(error); 
  useLogoutUser(isForbidden || isUnAuthorized);
  
  const formErrors = {};
  let serverError;
  const tchatId = data?.data.tchat_id;

  if(isClientError) {
    formErrors.inputs = error.response.data.errors
    formErrors.message = error.response.data.message;
  }

  if(isServerError) {
    console.log(error)
    serverError = 'Erreur interne du serveur. Veuillez réessayer plus tard.';
  }

  return { 
    mutate, 
    isPending, 
    tchatId,
    isClientError, 
    isServerError, 
    formErrors, 
    serverError,
  }
}

export default useCreateCategoryWithChat;
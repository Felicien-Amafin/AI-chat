import { useCreateCategoryWithChatMutation } from "../../../services/mutations";
import useChatMutationHandler from "./useChatMutationHandler";

const useCreateCategoryWithChat = () => {
  const { mutate, isPending, data, error } = useCreateCategoryWithChatMutation();
  const { 
    tchatId,
    isClientError, 
    isServerError, 
    formErrors,
    serverError
  } = useChatMutationHandler({error, data});

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
import { useAddChatToCategoryMutation } from "../../../services/mutations";
import useChatMutationHandler from "./useChatMutationHandler";

const useAddChatToCategory = () => {
    const { mutate, isPending, data, error } = useAddChatToCategoryMutation();
    const { 
    chatId,
    isClientError, 
    isServerError, 
    formErrors,
    serverError
  } = useChatMutationHandler({error, data});

  return { 
    mutate, 
    isPending, 
    chatId,
    isClientError, 
    isServerError, 
    formErrors, 
    serverError,
  }
}

export default useAddChatToCategory;
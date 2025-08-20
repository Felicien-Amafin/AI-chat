import { useAddChatToCategoryMutation } from "../../../services/mutations";
import useChatMutationHandler from "./useChatMutationHandler";

const useAddChatToCategory = () => {
    const { mutate, isPending, data, error } = useAddChatToCategoryMutation();
    const { 
    tchatId,
    isClientError, 
    isServerError, 
    formErrors,
    serverError
  } = useChatMutationHandler({error, data});

  console.log(data)
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

export default useAddChatToCategory;
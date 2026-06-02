import { useDispatch } from "react-redux";
import useRequestErrorHandler from "../../../hooks/useRequestErrorHandler";
import { useSendChatMessageMutation } from "../../../services/mutations";
import useLogoutUser from "./useLogoutUser";
import { setUserQuestion } from "../../../store/chatSlice";
import { capitalizedFirstChar, trimAndLowerCase } from "../../../utils";
import { useCallback } from "react";

const useSendChatMessage = () => {
  const dispatch = useDispatch();
  const { mutate, isPending, data, error } = useSendChatMessageMutation();
  const { isUnAuthorized, isForbidden, isServerError, isGeminiApiDown } = useRequestErrorHandler(error);// Handles potential errors
  useLogoutUser(isForbidden || isUnAuthorized);

  const isError = isServerError || isGeminiApiDown
  const errorMessage = error?.response?.data?.message || error?.message || "Une erreur est survenue";
  const dialog = data?.data.dialog;

  const submitMessage = useCallback(
    (userMessage, chatHistory, chatId) => {
      if (!userMessage) return;

      dispatch(setUserQuestion(capitalizedFirstChar(userMessage)));

      mutate({
        user_message: userMessage,
        chat_history: chatHistory,
        chat_id: chatId,
      });
    },
    [dispatch, mutate] // dépendances
  );

  const handlePromptMessageSubmission = ({formData, resetForm, chatHistory, chatId}) => {
    const newFormData = trimAndLowerCase(formData);
    const userMessage = newFormData.prompt;
    
    submitMessage(userMessage, chatHistory, chatId);
    resetForm();
  };

  return { 
    handlePromptMessageSubmission, 
    submitMessage, 
    isPending, 
    dialog, 
    isError, 
    errorMessage 
  }
}

export default useSendChatMessage;
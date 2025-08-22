import useRequestErrorHandler from "../../../hooks/useRequestErrorHandler";
import { useGetChatQuery } from "../../../services/queries";
import useLogoutUser from "./useLogoutUser";

const useGetChat = (chatId) => {
  const { isPending, data, error } = useGetChatQuery('chat-messages', chatId);
  // Handles potential errors after fetching chat's messages
  const { isServerError, isUnAuthorized, isForbidden, isClientError, isNotFound } = useRequestErrorHandler(error);
  useLogoutUser(isUnAuthorized || isForbidden);

  let chatMessages = null;

  if(data && data.data.chat.messages.length > 0) {
    chatMessages = data.data.chat.messages;
  }

  return { isPending, chatMessages, isServerError, isClientError, isNotFound };
}

export default useGetChat;
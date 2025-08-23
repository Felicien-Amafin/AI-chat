import { useEffect } from "react";
import useRequestErrorHandler from "../../../hooks/useRequestErrorHandler";
import { useGetChatQuery } from "../../../services/queries";
import useLogoutUser from "./useLogoutUser";
import { useDispatch } from "react-redux";
import { setChatHistory } from "../../../store/chatSlice";

const useGetChat = (chatId) => {
  const dispatch = useDispatch();
  const { isPending, data, error } = useGetChatQuery('chat-messages', chatId);
  // Handles potential errors after fetching chat's messages
  const { isServerError, isUnAuthorized, isForbidden, isClientError, isNotFound } = useRequestErrorHandler(error);
  useLogoutUser(isUnAuthorized || isForbidden);

  let chatMessages = null;

  if(data && data.data.chat.messages.length > 0) {
    chatMessages = data.data.chat.messages;
  }

  useEffect(() => {
    if(chatMessages) {
      //Will dispach a new chat history every time user ask a new question
      dispatch(setChatHistory(chatMessages));
    }
  }, [chatMessages, dispatch]);

  return { isPending, chatMessages, isServerError, isClientError, isNotFound };
}

export default useGetChat;
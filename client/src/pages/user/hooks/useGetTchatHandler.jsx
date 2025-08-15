import useRequestErrorHandler from "../../../hooks/useRequestErrorHandler";
import { useFetchTchat } from "../../../services/queries";
import useLogoutUser from "./useLogoutUser";

const useGetTchatHandler = (tchatId) => {
  const { isPending, data, error } = useFetchTchat('tchat-messages', tchatId);
  // Handles potential errors after fetching tchat's messages
  const { isServerError, isUnAuthorized, isForbidden } = useRequestErrorHandler(error);
  useLogoutUser(isUnAuthorized || isForbidden);

  let tchatMessages = null;

  if(data && data.data.tchat.messages.length > 0) {
    tchatMessages = data.data.tchat.messages;
  }

  return { isPending, tchatMessages, isServerError };
}

export default useGetTchatHandler;
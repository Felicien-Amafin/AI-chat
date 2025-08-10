import useRequestErrorHandler from "../../../hooks/useRequestErrorHandler";
import { useFetchTchatMessages } from "../../../services/queries";
import useLogoutUser from "./useLogoutUser";

const useGetTchatMessagesHandler = () => {
  const { isPending, data, error } = useFetchTchatMessages('tchatMessages');
  // Handles potential errors after fetching tchat's messages
  const { isServerError, isUnAuthorized, isForbidden } = useRequestErrorHandler(error);
  useLogoutUser(isUnAuthorized || isForbidden);

  let tchatMessages = null;

  if(data && data.data.messages.length > 0) {
    tchatMessages = data.data.messages;
  }

  return { isPending, tchatMessages, isServerError };
}

export default useGetTchatMessagesHandler;
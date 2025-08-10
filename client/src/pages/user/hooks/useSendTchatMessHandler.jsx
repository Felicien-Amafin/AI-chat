import useRequestErrorHandler from "../../../hooks/useRequestErrorHandler";
import { useSendTchatMessage } from "../../../services/mutations";
import useLogoutUser from "./useLogoutUser";

const useSendTchatMessHandler = () => {
  const { mutate, isPending, data, error } = useSendTchatMessage();
  
  const { isUnAuthorized, isForbidden, isServerError } = useRequestErrorHandler(error);// Handles potential errors

  useLogoutUser(isForbidden || isUnAuthorized);

  const serverError = 'Une erreur est survenue. Veuillez réessayer.';
  const dialog = data?.data.dialog;

  return { mutate, isPending, dialog, isServerError, serverError }
}

export default useSendTchatMessHandler;
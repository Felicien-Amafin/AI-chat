import useRequestErrorHandler from "../../../hooks/useRequestErrorHandler";
import { useFetchSingleCategorie } from "../../../services/queries";
import useLogoutUser from "./useLogoutUser";

const useGetSingleCategorieHandler = (categorieName) => {
  const { isPending, data, error } = useFetchSingleCategorie(categorieName);
  const { isForbidden, isUnAuthorized, isServerError} = useRequestErrorHandler(error);
  useLogoutUser(isForbidden || isUnAuthorized);

  let tchatList = null;
  const serverError = 'List de tchats indisponible. Veuillez réessayer plus tard.'

  if(data && data.data.tchats_list.length > 0) {
    tchatList = data.data.tchats_list;
  }

  return { isPending, tchatList, isServerError, serverError }
}

export default useGetSingleCategorieHandler;
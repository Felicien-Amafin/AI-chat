import useRequestErrorHandler from "../../../hooks/useRequestErrorHandler";
import { useFetchSingleCategorie } from "../../../services/queries";
import useLogoutUser from "./useLogoutUser";

const useGetSingleCategorieHandler = (categorieName) => {
  const { isPending, data, error } = useFetchSingleCategorie(categorieName);
  const { isForbidden, isUnAuthorized, isServerError} = useRequestErrorHandler(error);
  useLogoutUser(isForbidden || isUnAuthorized);

  const tchatList = data?.data.tchats_list;
  const serverError = 'List de tchats indisponible. Veuillez réessayer plus tard.'

  return { isPending, tchatList, isServerError, serverError }
}

export default useGetSingleCategorieHandler;
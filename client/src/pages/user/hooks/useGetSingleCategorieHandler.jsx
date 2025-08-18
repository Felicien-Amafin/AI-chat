import useRequestErrorHandler from "../../../hooks/useRequestErrorHandler";
import { useFetchSingleCategorie } from "../../../services/queries";
import useLogoutUser from "./useLogoutUser";
import useRedirectTo404 from "./useRedirectTo404";

const useGetSingleCategorieHandler = (categorieName) => {
  const { isPending:isCategoriePending, data, error } = useFetchSingleCategorie(categorieName);
  const { isForbidden, isUnAuthorized, isServerError:isCategorieServerError, isNotFound } = useRequestErrorHandler(error);
  useLogoutUser(isForbidden || isUnAuthorized);
  useRedirectTo404(isNotFound);

  let tchatList = null;
  const categorieServerError = 'List de tchats indisponible. Veuillez réessayer plus tard.'

  if(data && data.data.tchats_list.length > 0) {
    tchatList = data.data.tchats_list;
  }

  return { isCategoriePending, tchatList, isCategorieServerError, categorieServerError }
}

export default useGetSingleCategorieHandler;
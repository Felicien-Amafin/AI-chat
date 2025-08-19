import useRequestErrorHandler from "../../../hooks/useRequestErrorHandler";
import { useFetchSingleCategorie } from "../../../services/queries";
import useLogoutUser from "./useLogoutUser";

const useGetSingleCategorieHandler = (categorieName) => {
  const { isPending:isCategoriePending, data, error } = useFetchSingleCategorie(categorieName);
  
  const { 
    isForbidden, isUnAuthorized, 
    isServerError:isCategorieServerError, 
    isNotFound:isCategorieNotFound 
  } = useRequestErrorHandler(error);

  useLogoutUser(isForbidden || isUnAuthorized);

  let tchatList = null;
  const categorieServerError = 'List de tchats indisponible. Veuillez réessayer plus tard.'
  const categorieNotFoundMess = isCategorieNotFound ? error?.response.data.message : ''

  if(data && data.data.tchats_list.length > 0) {
    tchatList = data.data.tchats_list;
  }

  return { 
    isCategoriePending, tchatList, isCategorieServerError, 
    categorieServerError, isCategorieNotFound, categorieNotFoundMess
  }
}

export default useGetSingleCategorieHandler;
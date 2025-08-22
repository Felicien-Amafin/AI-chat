import useRequestErrorHandler from "../../../hooks/useRequestErrorHandler";
import { useGetCategoryQuery } from "../../../services/queries";
import useLogoutUser from "./useLogoutUser";

const useGetCategory = (categoryName) => {
  const { isPending:isCategoryPending, data, error } = useGetCategoryQuery(categoryName);
  
  const { 
    isForbidden, isUnAuthorized, 
    isServerError:isCategoryServerError, 
    isNotFound:isCategoryNotFound 
  } = useRequestErrorHandler(error);

  useLogoutUser(isForbidden || isUnAuthorized);

  const chatList = data?.data.chats_list;
  /* let chatList = null; */
  const categoryServerError = 'List de chats indisponible. Veuillez réessayer plus tard.'
  const categoryNotFoundMess = isCategoryNotFound ? error?.response.data.message : ''
 
  /* if(data && data.data.chats_list.length > 0) {
    chatList = data.data.chats_list;
  } */

  return { 
    isCategoryPending, chatList, isCategoryServerError, 
    categoryServerError, isCategoryNotFound, categoryNotFoundMess
  }
}

export default useGetCategory;
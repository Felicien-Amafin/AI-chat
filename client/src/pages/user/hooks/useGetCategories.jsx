import useRequestErrorHandler from '../../../hooks/useRequestErrorHandler';
import { useGetCategoriesQuery } from '../../../services/queries';
import useLogoutUser from './useLogoutUser';

const useGetCategories = () => {
    const categoriesKey = 'categories';
    const { isPending:isCategoriesPending, data, error } = useGetCategoriesQuery(categoriesKey); 
    const { isServerError, isUnAuthorized, isForbidden } = useRequestErrorHandler(error);
    useLogoutUser(isUnAuthorized || isForbidden);
  
    let categories = null;
   
    if(data && data.data.categories.length > 0) {
       categories = data.data.categories;
    }

    const categoriesServerError = 'Catégories indisponiles. Veuillez réessayez plus tard.';

    return { isCategoriesPending, categories, isServerError, categoriesServerError };
}

export default useGetCategories;
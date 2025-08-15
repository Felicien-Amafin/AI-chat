import useRequestErrorHandler from '../../../hooks/useRequestErrorHandler';
import { useFetchCategories } from '../../../services/queries';
import useLogoutUser from './useLogoutUser';

const useGetCategoriesHandler = () => {
    const categoriesKey = 'categories';
    const { isPending:isCategoriesPending, data, error } = useFetchCategories(categoriesKey); //Fetches categories'name in db
    const { isServerError, isUnAuthorized, isForbidden } = useRequestErrorHandler(error);// Handle potential errors after fetching categories'name
    useLogoutUser(isUnAuthorized || isForbidden);
  
    let categories = null;
   
    if(data && data.data.categories.length > 0) {
       categories = data.data.categories;
    }

    return { isCategoriesPending, categories, isServerError };
}

export default useGetCategoriesHandler;
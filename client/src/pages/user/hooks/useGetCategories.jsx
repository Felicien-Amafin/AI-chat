import useRequestErrorHandler from '../../../hooks/useRequestErrorHandler';
import { useFetchCategories } from '../../../services/queries';
import useLogoutUser from './useLogoutUser';

const useGetCategories = () => {
    const categoriesKey = 'categories';
    const { isPending, data, error } = useFetchCategories(categoriesKey); 
    const { isServerError, isUnAuthorized, isForbidden } = useRequestErrorHandler(error);
    useLogoutUser(isUnAuthorized || isForbidden);

    let categories = null;
   
    if(data && data.data.categories.length > 0) {
       categories = data.data.categories;
    }

    return { isPending, categories, isServerError };
}

export default useGetCategories;
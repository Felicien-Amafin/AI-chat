import useRequestErrorHandler from '../../../hooks/useRequestErrorHandler';
import { useFetchCategories } from '../../../services/queries';
import useLogoutUser from './useLogoutUser';

const useGetCategories = () => {
    const categoriesKey = 'categories';
    const { isPending, data, error } = useFetchCategories(categoriesKey); 
    const { isServerError, isUnAuthorized, isForbidden } = useRequestErrorHandler(error);
    useLogoutUser(isUnAuthorized || isForbidden);
    
    let categories = data?.data.categories_names.length > 0 ? 
    data?.data.categories_names : null;
   
    return { isPending, categories, isServerError };
}

export default useGetCategories;
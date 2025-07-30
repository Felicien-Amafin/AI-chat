import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useErrorHandler from './useErrorHandler';
import { useFetchCategories } from '../../../services/queries';
import { logoutUser, setAccessToken } from '../../../store/authSlice';

const useGetCategories = () => {
    const categoriesKey = 'categories';
    /* const { accessTkKey } = useSelector((state) => state.auth); */

    const { 
        isPending:isCategoriesPending, 
        data:categoriesData, 
        error:categoriesError
    } = useFetchCategories(categoriesKey); 

    const { 
        isServerError, 
        isUnAuthorized, 
        isForbidden 
    } = useErrorHandler(categoriesError);
   
    
    let categories = categoriesData?.data.categories_names.length > 0 ? 
    categoriesData?.data.categories_names : null;
    
    return { isCategoriesPending, categories, isForbidden, isUnAuthorized, isServerError };
}

export default useGetCategories;
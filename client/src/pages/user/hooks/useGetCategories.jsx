import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useErrorHandler from '../../../hooks/useErrorHandler';
import { useFetchCategories, useFetchNewAccessToken } from '../../../services/queries';
import { logoutUser, setAccessToken } from '../../../store/authSlice';

const useGetCategories = () => {
    const categoriesKey = 'categories';
    const { accessTkKey } = useSelector((state) => state.auth);

    const { 
        isPending:isCategoriesPending, 
        data:categoriesData, 
        error:categoriesError
    } = useFetchCategories(categoriesKey); 

    const { 
        isServerError, 
        isUnAuthorized 
    } = useErrorHandler(categoriesError);
   
    const { //Fetches new access tk only if user is unAuth
        isFetching:isFetchingAccessTk,
        data:accessTkData,
        error:accessTkError 
    } = useFetchNewAccessToken(isUnAuthorized, accessTkKey);
    
    const queryClient = useQueryClient();
    const dispatch = useDispatch();

    let categories = categoriesData?.data.categories_names.length > 0 ? 
    categoriesData?.data.categories_names : null;
    
    useEffect(() => {
        if(accessTkData) {
            dispatch(setAccessToken(accessTkData.data.accessToken));
            //Clears error in useFetchCategories + clear accessTk data in useFetchNewAccessToken
            queryClient.removeQueries({ categoriesKey, exact: true});
            queryClient.removeQueries({ accessTkKey, exact: true});
        }

        if(accessTkError) {
            //Remove all datas or errors from cache before login out user
            queryClient.removeQueries();
            dispatch(logoutUser());
        }

    }, [
        queryClient, 
        accessTkKey,
        categoriesKey, 
        categoriesData, 
        accessTkData, 
        accessTkError,
        dispatch,
    ]);
    
    return { isCategoriesPending, isFetchingAccessTk, categories, isServerError };
}

export default useGetCategories;
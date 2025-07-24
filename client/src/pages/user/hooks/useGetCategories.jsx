import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useErrorHandler from '../../../hooks/useErrorHandler';
import { useFetchCategories, useFetchNewAccessToken } from '../../../services/queries';
import { logoutUser, setAccessToken } from '../../../store/authSlice';

const useGetCategories = (isActive, setIsActive) => {
    const categoriesKey = 'categories';
    const { accessTkKey } = useSelector((state) => state.auth);

    const { 
        isPending:isCategoriesPending, 
        data:categoriesData, 
        error:categoriesError
    } = useFetchCategories(isActive, categoriesKey); 

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
        //Invalidate data to force a refetch every time component mounts
        if(categoriesData) {
            queryClient.invalidateQueries({ queryKey:[categoriesKey] });
            setIsActive(false);
        }
            
        if(accessTkData) {
            dispatch(setAccessToken(accessTkData.data.accessToken));
            //Clears the cache for useFetchCategories() + useGetNewAccessToken
            queryClient.removeQueries({ queryKey: [accessTkKey] });
            queryClient.removeQueries({ queryKey: [categoriesKey] });
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
        setIsActive
    ]);
    
    return { isCategoriesPending, isFetchingAccessTk, categories, isServerError };
}

export default useGetCategories;
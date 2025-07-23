import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useErrorHandler from './useErrorHandler';
import { useFetchCategories, useGetNewAccessToken } from '../../../services/queries';
import { logoutUser, setAccessToken } from '../../../store/authSlice';

const useGetCategories = (isActive) => {
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
    } = useGetNewAccessToken(isUnAuthorized, accessTkKey);
    
    const queryClient = useQueryClient();
    const dispatch = useDispatch();
   
    const categoriesRef = useRef(null);
    
    //Reset categoriesRef to null for a new query
    if(isActive && categoriesRef.current) categoriesRef.current = null; 

    if(categoriesData?.data.categories_names.length > 0) {
        //Stores categories in a persisting 
        categoriesRef.current = categoriesData?.data.categories_names;
    }
   
    useEffect(() => {
        //Delete data from cache in order to always get fresh data
        if(categoriesData) queryClient.removeQueries(categoriesKey);
            
        if(accessTkData) {
            dispatch(setAccessToken(accessTkData.data.accessToken));
            //Clears the cache for useFetchCategories() + useGetNewAccessToken
            queryClient.removeQueries({ queryKey: [accessTkKey, categoriesKey] });
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
        dispatch
    ]);
    
    return { isCategoriesPending, isFetchingAccessTk, categoriesRef, isServerError };
}

export default useGetCategories;
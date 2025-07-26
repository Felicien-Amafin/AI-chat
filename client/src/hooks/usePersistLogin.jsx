import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQueryClient } from '@tanstack/react-query';
import { useFetchNewAccessToken } from "../services/queries";
import useErrorHandler from "./useErrorHandler";
import { setUserCred } from "../store/authSlice";

const usePersistLogin = (isActive) => {
    const { accessTkKey } = useSelector((state) => state.auth);
    const { isPending:isAuthPending, data, error } = useFetchNewAccessToken(isActive, accessTkKey);
    const { isUnAuthorized } = useErrorHandler(error);
    const queryClient = useQueryClient();
    const dispatch = useDispatch();

    useEffect(() => {
        if(data) { 
            dispatch(setUserCred(data.data)); 
            queryClient.removeQueries({ accessTkKey, exact: true}); //Delete data from cache
        }

        if(error) {  
            queryClient.removeQueries({ accessTkKey, exact: true}); //Delete error from cache
        }
        
    },[data, error, accessTkKey, dispatch, queryClient]);

    return { isAuthPending, isUnAuthorized };
}       

export default usePersistLogin;
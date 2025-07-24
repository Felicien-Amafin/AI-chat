import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQueryClient } from '@tanstack/react-query';
import { useFetchNewAccessToken } from "../services/queries";
import useErrorHandler from "./useErrorHandler";
import { setUserCred } from "../store/authSlice";

const usePersistLogin = (isActive) => {
    const { accessTkKey } = useSelector((state) => state.auth);
    const { data, error } = useFetchNewAccessToken(isActive, accessTkKey);
    const { isUnAuthorized } = useErrorHandler(error);
    const queryClient = useQueryClient();
    const dispatch = useDispatch();

    useEffect(() => {
        if(data) { 
            dispatch(setUserCred(data.data)); 
            queryClient.removeQueries(accessTkKey); //Delete data from cache
        }

        if(error) {  
            queryClient.removeQueries(accessTkKey); //Delete error from cache
        }
        
    },[data, error, accessTkKey, dispatch, queryClient]);

    return { isUnAuthorized };
}       

export default usePersistLogin;
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQueryClient } from '@tanstack/react-query';
import { useGetNewAccessToken } from "../services/queries";
import { setUserCred } from "../store/authSlice";

const usePersistLogin = (isActive) => {
    const { accessTkKey } = useSelector((state) => state.auth);
    const { data, error } = useGetNewAccessToken(isActive, accessTkKey);
    const queryClient = useQueryClient();
    const dispatch = useDispatch();

    const isUnAuthorised = error?.status === 401 || error?.status === 403;
   
    useEffect(() => {
        if(data) { 
            dispatch(setUserCred(data.data)); 
            queryClient.removeQueries(accessTkKey); //Delete data from cache
        }

        if(error) {  
            queryClient.removeQueries(accessTkKey); //Delete error from cache
        }
        
    },[data, error, accessTkKey, dispatch, queryClient]);

    return { isUnAuthorised };
}

export default usePersistLogin;
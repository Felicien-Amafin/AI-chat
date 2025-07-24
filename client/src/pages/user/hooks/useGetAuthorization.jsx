import { useDispatch, useSelector } from "react-redux";
import useErrorHandler from "../../../hooks/useErrorHandler";
import { useFetchAuthorization, useFetchNewAccessToken } from "../../../services/queries";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { logoutUser, setAccessToken } from "../../../store/authSlice";

const useGetAuthorization = (isActive, setIsActive) => {
    const authKey = 'authKey';
    const { accessTkKey } = useSelector((state) => state.auth);

    const { 
        isPending:isAuthPending, 
        data:authData, 
        error:authError
    } = useFetchAuthorization(isActive, authKey); 

    const { isServerError, isUnAuthorized } = useErrorHandler(authError);

    const { 
        isPending:isAccessTkPending, 
        data:accessTkData, 
        error:accessTkError
    } = useFetchNewAccessToken(isUnAuthorized, accessTkKey); //Fetch new accessTK if unAuth

    const queryClient = useQueryClient();
    const dispatch = useDispatch();

    const isAuthorized = authData?.status === 200;
    const serverErrorMess = `Impossible d'accéder au formulaire. Veuillez réessayer plus tard.`

    useEffect(() => {
        if(authData) {
            //Invalidate authKey to force a refetching every time component mounts
            queryClient.invalidateQueries({ queryKey: [authKey] });
            setIsActive(false);
        }

        if(accessTkData) {
            //store the new access token and delete the cahce
            dispatch(setAccessToken(accessTkData.data.accessToken));
            queryClient.removeQueries({ queryKey: [accessTkKey] });
            queryClient.removeQueries({ queryKey: [authKey] });
        }

        if(accessTkError) {
            queryClient.removeQueries();
            dispatch(logoutUser());
        }

    },[accessTkData, accessTkKey, accessTkError, authData, queryClient, dispatch, setIsActive]);

    return {
        isAuthPending,
        isAccessTkPending,
        isAuthorized,
        isUnAuthorized,
        isServerError,
        serverErrorMess
    }
}

export default useGetAuthorization;
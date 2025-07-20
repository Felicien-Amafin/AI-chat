import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetNewAccessToken } from "../services/queries";
import { setUserCred } from "../store/authSlice";

const usePersistLogin = (isActive) => {
    const queryKey = 'accessToken';
    const { data, error } = useGetNewAccessToken(isActive, queryKey);
    const dispatch = useDispatch();
 
    const isUnAuthorised = error?.status === 401 || error?.status === 403;

    useEffect(() => {
        if(data) {
            dispatch(setUserCred(data.data));
        }
        
    },[data, dispatch]);

    return { isUnAuthorised };
}

export default usePersistLogin;
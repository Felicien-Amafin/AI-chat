import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRefreshAccessTk } from "../services/mutations";
import { setUserCred } from "../store/authSlice";

const usePersistLogin = (isActive) => {
    const dispatch = useDispatch();
    const { mutate, data, error } = useRefreshAccessTk();
 
    useEffect(() => {
        if(isActive) { 
            mutate(); 
        }
    }, [isActive, mutate]);

    useEffect(() => {
        if(data) {
            dispatch(setUserCred(data.data)); 
        }
    },[data, dispatch, mutate]);

    
    return { data, error }
}       

export default usePersistLogin;

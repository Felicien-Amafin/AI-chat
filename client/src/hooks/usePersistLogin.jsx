import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRefreshAccessTkMutation } from "../services/mutations";
import { setUserCred } from "../store/authSlice";

const usePersistLogin = (isActive) => {
    const dispatch = useDispatch();
    const { mutate, data, error } = useRefreshAccessTkMutation();
 
    useEffect(() => {
        if(isActive) { 
            mutate(); 
        }
    }, [isActive, mutate]);

    useEffect(() => {
        if(data) {
            dispatch(setUserCred(data.data)); 
        }
    },[data, dispatch]);

    
    return { data, error }
}       

export default usePersistLogin;

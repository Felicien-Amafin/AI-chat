import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRefreshAccessTk } from "../services/mutations";
import { setUserCred } from "../store/authSlice";

const usePersistLogin = (isActive) => {
    const dispatch = useDispatch();
    const { isIdle, isPending, data, mutate } = useRefreshAccessTk();
 
    useEffect(() => {
        if(isActive) { 
            mutate(); 
            console.log('Mutate is running...')
        }
    }, [isActive, mutate]);

    useEffect(() => {
        if(data) {
            dispatch(setUserCred(data.data)); 
            console.log('dispatching cred')
        }
    },[data, dispatch, mutate]);

    
    return { isIdle, isPending }
}       

export default usePersistLogin;

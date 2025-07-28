import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFetchNewAccessToken } from "../services/queries";
import { setUserCred } from "../store/authSlice";

const usePersistLogin = (isActive) => {
    const dispatch = useDispatch();
    const { isPending, data } = useFetchNewAccessToken(isActive, 'accessToken');

    useEffect(() => {
        if(data) dispatch(setUserCred(data.data)); 
        
    },[data, dispatch]);

    return { isPending, data };
}       

export default usePersistLogin;
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRefreshAccessTk } from "../services/mutations";
import { setUserCred } from "../store/authSlice";

const usePersistLogin = (isActive) => {
    const dispatch = useDispatch();
    const [isRefreshing, setIsRefresshing] = useState(isActive);
    const { isPending, data, mutate } = useRefreshAccessTk();

    if(isRefreshing) mutate();

    useEffect(() => {
        if(data) dispatch(setUserCred(data.data)); 
        setIsRefresshing(false);
    },[data, dispatch]);

    return { isPending, data };
}       

export default usePersistLogin;

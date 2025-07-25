import { useSelector } from "react-redux"
import { jwtDecode } from 'jwt-decode';

const useVerifyAccesTk = () => {
    const { accessToken } = useSelector((state) => state.auth);
    let isExpired;

    if(!accessToken) isExpired = true;
    try {
        const decodedToken = jwtDecode(accessToken);
        const currentTime = Date.now() / 1000; 

        isExpired =  decodedToken.exp < currentTime;
    } catch (error) {
        isExpired =  true; 
    }

    return { isExpired }
}

export default useVerifyAccesTk;
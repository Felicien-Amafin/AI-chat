import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRedirectTo404 = (isRedirected) => {
    const navigate = useNavigate();
    
    useEffect(() => {
        if(isRedirected) {
            navigate('/404');
        }
        
    }, [isRedirected, navigate]);
}

export default useRedirectTo404;
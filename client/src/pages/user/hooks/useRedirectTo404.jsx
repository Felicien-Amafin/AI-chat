import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useRedirectTo404 = (isRedirected) => {
    const navigate = useNavigate();

    console.log(isRedirected)

    useEffect(() => {
        if(isRedirected) {
            navigate('/404');
            console.log('404')
        }
        
    }, [isRedirected, navigate]);
}

export default useRedirectTo404;
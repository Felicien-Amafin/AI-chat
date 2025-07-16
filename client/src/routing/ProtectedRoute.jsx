import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const { accessToken } = useSelector((state) => state.auth);

    if(!accessToken) return <Navigate to='/auth/sign-in'/>
    
    return children;
}

export default ProtectedRoute;
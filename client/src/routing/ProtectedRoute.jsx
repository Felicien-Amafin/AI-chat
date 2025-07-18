import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children, isAuthorized}) => {
    if(!isAuthorized) return <Navigate to='/auth/sign-in'/>;

    return children;
}

export default ProtectedRoute;
import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, userRoutes } from './routing/routes';
import usePersistLogin from './hooks/usePersistLogin';
import Auth from './pages/auth/Auth';
import User from './pages/user/User';
import HomePage from './pages/home/HomePage';
import ErrorPage from './pages/error/Error';
import ProtectedRoute from './routing/protectedRoute';
import { useSelector } from 'react-redux';

function App() {
  const { user } = useSelector((state) => state.auth);
  const { isPending, data } = usePersistLogin(user === null);
  
  const isAuthorized = data || user;

  if(isPending) return null;

  return (
    <Routes>
      <Route path='/' element={isAuthorized ? <Navigate to={'user'}/> : <HomePage/>}/>

      <Route path='auth' element={isAuthorized ? <Navigate to={'/user'}/> : <Auth/>}>
        {authRoutes.map((route)=> <Route 
          key={route.path} 
          path={route.path} 
          element={route.element}
        />)}
      </Route>

      <Route path='user' element={<ProtectedRoute isAuthorized={isAuthorized}><User/></ProtectedRoute>}>
        {userRoutes.map((route)=> {
          return <Route key={route.path} path={route.path} element={route.element}/>
        })}
      </Route>

      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
  )
}

export default App;


import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, userRoutes } from './routing/routes';
import { useSelector } from 'react-redux';
import usePersistLogin from './hooks/usePersistLogin';
import Auth from './pages/auth/Auth';
import User from './pages/user/User';
import HomePage from './pages/home/HomePage';
import ErrorPage from './pages/error/Error';
import ProtectedRoute from './routing/protectedRoute';

function App() {
  const { isUnAuthorized } = usePersistLogin();

  if(!accessToken && !isUnAuthorized) return null;

  return (
    <Routes>
      <Route path='/' element={accessToken ? <Navigate to={'user'}/> : <HomePage/>}/>

      <Route path='auth' element={accessToken ? <Navigate to={'/user'}/> : <Auth/>}>
        {authRoutes.map((route)=> <Route 
          key={route.path} 
          path={route.path} 
          element={route.element}
        />)}
      </Route>

      <Route path='user' element={<ProtectedRoute isAuthorized={accessToken}><User/></ProtectedRoute>}>
        {userRoutes.map((route)=> {
          return <Route key={route.path} path={route.path} element={route.element}/>
        })}
      </Route>

      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
  )
}

export default App

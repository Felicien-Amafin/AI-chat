import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, userRoutes } from './routing/routes';
import usePersistLogin from './hooks/usePersistLogin';
import Auth from './pages/auth/Auth';
import User from './pages/user/User';
import HomePage from './pages/home/HomePage';
import ErrorPage from './pages/error/Error';
import ProtectedRoute from './routing/ProtectedRoute';
import { useSelector } from 'react-redux';
import useIsDesktop from './hooks/useIsDesktop';
import OnlyUnderDesktop from './pages/onlyUnderDesktop/OnlyUnderDesktopPage';

function App() {
  const isDesktop = useIsDesktop();
  const { user } = useSelector((state) => state.auth);
  const { data, error } = usePersistLogin(!user);

  if (!isDesktop) {
    return <OnlyUnderDesktop />;
  }

  if(!data && !error) return null;

  const isAuthorized = user || data;

  return (
    <Routes>
      <Route path='/' element={isAuthorized ? <Navigate to={'/user'}/> : <HomePage/>}/>

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
      <Route path="/404" element={<ErrorPage />} />
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
  )
}

export default App;


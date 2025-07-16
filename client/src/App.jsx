import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Auth from './pages/auth/Auth';
import User from './pages/user/User';
import HomePage from './pages/home/HomePage';
import ErrorPage from './pages/error/Error';
import { authRoutes, userRoutes } from './routing/routes';
import ProtectedRoute from './routing/ProtectedRoute';

function App() {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={!user ? <HomePage/> : <Navigate to={'user'}/>}/>
        <Route path='auth' element={!user ? <Auth/> : <Navigate to={'/user'}/>}> */}
        <Route path='/' element={<HomePage/>}/>
        <Route path='auth' element={<Auth/>}>
          {authRoutes.map((route)=> <Route 
            key={route.path} 
            path={route.path} 
            element={route.element}
          />)}
        </Route>
        <Route path='user' element={<ProtectedRoute><User/></ProtectedRoute>}>
          {userRoutes.map((route)=> {
            return <Route key={route.path} path={route.path} element={route.element}/>
          })}
        </Route>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </>
  )
}

export default App

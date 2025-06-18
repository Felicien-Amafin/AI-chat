import { Routes, Route, Navigate } from 'react-router-dom';
import Auth from './pages/auth/Auth';
import HomePage from './pages/home/HomePage';
import { authRoutes } from './routing/routes';

function App() {

  const user = false;

  return (
    <>
      <Routes>
        <Route path='/' element={!user ? <HomePage/> : <Navigate to={'user'}/>}/>

        <Route path='auth' element={!user ? <Auth/> : <Navigate to={'/user'}/>}>
          {authRoutes.map((route)=> <Route 
            key={route.path} 
            path={route.path} 
            element={route.element}
          />)}
        </Route>
      </Routes>
    </>
  )
}

export default App

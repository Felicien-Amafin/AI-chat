import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/home/HomePage';

function App() {

  /* const user = false; */

  return (
    <>
      <Routes>
        {/* <Route path='/' element={!user ? <HomePage/> : <Navigate to={'user'}/>}/> */}
        <Route path='/' element={<HomePage/>}/>

        {/* <Route path='auth' element={!user ? <Auth/> : <Navigate to={'/user'}/>}>
          {authRoutes.map((route)=> <Route 
            key={route.path} 
            path={route.path} 
            element={route.element}
          />)}
        </Route>

        <Route path='user' element={<ProtectedRoute user={user}><User/></ProtectedRoute>}>
          {userRoutes.map((route)=> {
            return <Route key={route.path} path={route.path} element={route.element}/>
          })}
        </Route> 

        <Route path='*' element={<ErrorPage/>}/> */}

      </Routes>
    </>
  )
}

export default App

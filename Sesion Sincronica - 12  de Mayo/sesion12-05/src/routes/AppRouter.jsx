import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom' 
import Login from '../container/login/Login';
import Register from '../container/register/Register';
import PublicRoutes from './PublicRoutes';


const AppRouter = () => {

    const [isAuth, setIsAuth] = useState(false)

  return (
    <>
    <BrowserRouter>
        <Routes>
            {/* Rutas Publicas */}
            <Route path='/login' element={<PublicRoutes isAuth={isAuth} ><Login /></PublicRoutes>} />
            <Route path='/registro' element={<PublicRoutes isAuth={isAuth} ><Register /></PublicRoutes>} />

            {/* Rutas Privadas */}


            {/* Redireccionamiento */}
            <Route path='*' element={<Navigate to="/login" />} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRouter;
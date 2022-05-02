import React from 'react';
import { 
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
 } from 'react-router-dom';
//  Componentes
import Navbar from '../components/Navbar';
import Form from '../components/Form';
import List from '../components/List';

const AppRouter = () => {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<List />} />   
            <Route path='/form' element={<Form />} />

            {/* Redireccionamiento a la raiz */}
            <Route path='/*' element={<Navigate to="/" />} />
        </Routes>
    </Router>
    </>
  )
}

export default AppRouter
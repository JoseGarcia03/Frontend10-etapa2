import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Nav.css'

const Navbar = () => {
  return (
    <header className='header'>
        <nav>
            <Link className='link' to="/">Listado</Link>
            <Link className='link' to="/form">Registro</Link>
        </nav>
        <hr />
    </header>
  )
}

export default Navbar

    import React from 'react'
    import { Link } from 'react-router-dom'
    import '../styles/navbar.css'
    import {ShoppingCartSimple} from 'phosphor-react'
const Navbar = () => {
  return (
        <div className='navbar'>
        <div className='links'>
            <Link to='/'>shop</Link>
            <Link to='/cart'> <ShoppingCartSimple size={39} color='white' /></Link>
        </div>
    </div>
      )
    }
    
export default Navbar
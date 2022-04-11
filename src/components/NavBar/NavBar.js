import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../img/KongvG.png'

import './Navbar.css';

export default function NavBar() {
    return (

        <>
        <header className="navbarH">

            <div className='cntImgGK'>
                <img src={Logo} alt='king vs Godzilla' />
            </div>
            <div className='cntNav'>
               
                <div className="list-item">
                    <NavLink className='linkN' exact to="/" >Home</NavLink>
                    <NavLink className='linkN1' to="/favs" >Favoritas</NavLink>
                </div>
            </div>
            
        </header>
        
        </>
    )
}
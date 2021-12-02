import React,{useState,useContext} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'
import catcher from '../../catcher.png'



const Navbar = ({user}) => {
    


    return ( 
        <div className="navbar_container">
             <div className="logo"> <img className="logo-image" src={catcher} alt=""/></div>
             <div className="space"></div>
             <ul className="menubar" >
                 <Link to='/' className="menu-item"><a href="#">Home</a></Link>
                 <Link  to='/about'className="menu-item"><a href="#">How it works</a></Link>
                 <Link  to='/register'className="menu-item"><a href="#">Register</a></Link>
                 <Link  to='/login'className="menu-item"><a href="#">Login</a></Link>
                 <Link  to='/admin'className="menu-item"><a href="#">Dashboard</a></Link>
                 
            
                
                 
             </ul>
            
        </div>
     );
}
export default Navbar;
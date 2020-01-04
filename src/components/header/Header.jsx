import React from 'react';
import stl from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
   return(
       <header className={stl.color}>
           <p>header</p>
           <div className={stl.loginBlock}>
               {props.isAuth ? props.login : <NavLink to={'/login'}>login</NavLink> }
           </div>
    </header>
       );
};
export default Header;
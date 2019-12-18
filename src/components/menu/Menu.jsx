import React from 'react';
import stl from './Menu.module.css';
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <nav className={stl.menuStyle}>
            <NavLink to='/homepage' activeClassName={stl.active}>главная</NavLink>
            <NavLink to='/blog' activeClassName={stl.active}>блог</NavLink>
            <NavLink to='/cases' activeClassName={stl.active}>кейсы</NavLink>
            <NavLink to='/contacts' activeClassName={stl.active}>контакты</NavLink>
            <NavLink to='/profile' activeClassName={stl.active}>профиль</NavLink>
        </nav>
    );
};

export default Menu;
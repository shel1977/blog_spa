import React from 'react';
import stl from './navBar.module.css';

const NavBar = () => {
    return (
        <div>
            <div className={stl.navBarStyle}>
                <ul>
                    <li> 1</li>
                    <li> 2</li>
                    <li> 3</li>
                    <li> 4</li>
                    <li> 5</li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
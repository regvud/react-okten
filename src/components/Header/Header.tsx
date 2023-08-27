import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div style={{display: "flex", justifyContent: "space-evenly"}}>
            <NavLink to={'login'}>Login</NavLink>
            <NavLink to={'register'}>Register</NavLink>
        </div>
    );
};

export default Header;
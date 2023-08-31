import React from 'react';
import {NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {authActions} from "../../redux/slices/authSlice";
import {authService} from "../../services/authService";

const Header = () => {
    const {me} = useAppSelector(state => state.auth);

    const dispatch = useAppDispatch();

    if (authService.getAccessToken() && !me) {
        dispatch(authActions.me())
    }

    return (
        <>
            {me ? <>
                    <h1>{me.username}</h1>
                    <h1>{new Date(me.last_login).toString()} </h1>
                </> :
                <div style={{display: "flex", justifyContent: "space-evenly"}}>
                    <NavLink to={'login'}>Login</NavLink>
                    <NavLink to={'register'}>Register</NavLink>
                </div>
            }
        </>
    );
};

export default Header;
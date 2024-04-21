import React from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import Navigation from "../components/navigation/Navigation";

export const RestrictedRoute = ({children, isAuth}) => {
    return (
        <div>
            {!isAuth ? <div>{children}</div> : <Navigate to={'/'}/>}
        </div>
    );
};
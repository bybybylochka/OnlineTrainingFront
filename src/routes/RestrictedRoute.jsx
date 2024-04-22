import React from 'react';
import {Navigate} from 'react-router-dom';

export const RestrictedRoute = ({children, isAuth}) => {
    return (
        <div>
            {!isAuth ? <div>{children}</div> : <Navigate to={'/'}/>}
        </div>
    );
};
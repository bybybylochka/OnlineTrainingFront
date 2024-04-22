import React from 'react';
import {Navigate} from 'react-router-dom';

export const PrivateRoute = ({children, isAuth, role, rightRole}) => {
    if (!isAuth) {
        return <Navigate to="/login"/>;
    }
    return (
        <div>
            {role === rightRole ? <div>{children}</div> : <Navigate to={'/'}/>}
        </div>
    );
};
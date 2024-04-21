import React from 'react';
import {Navigate, useNavigate} from 'react-router-dom';

export const PrivateStudentRoute = ({children, isAuth, role}) => {
    if (!isAuth) {
        return <Navigate to="/login"/>;
    }
    return (
        <div>
            {role === 'ROLE_STUDENT' ? <div>{children}</div> : <Navigate to={'/'}/>}
        </div>
    );
};
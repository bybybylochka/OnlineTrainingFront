import React from 'react';
import {Navigate, useNavigate} from 'react-router-dom';

export const PrivateStudentRoute = ({children, isAuth, role}) => {
    const navigate = useNavigate();
    const presentPage = () => {
        navigate(-1);
    }
    if (!isAuth) {
        return <Navigate to="/login"/>;
    }
    return (
        <div>
            {role === 'ROLE_STUDENT' ? <div>{children}</div> : presentPage()}
        </div>
    );
};
import React from 'react';
import {useNavigate} from 'react-router-dom';

export const RestrictedRoute = ({children, isAuth}) => {
    const navigate = useNavigate();
    const presentPage = () => {
        navigate(-1);
    }
    return (
        <div>
            {!isAuth ? <div>{children}</div> : presentPage()}
        </div>
    );
};
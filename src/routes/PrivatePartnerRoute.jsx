import React, {useEffect} from 'react';
import {Navigate, useNavigate} from 'react-router-dom';

export const PrivatePartnerRoute = ({children, isAuth, role}) => {
    if (!isAuth) {
        return <Navigate to="/login"/>;
    }
    return (
        <div>
            {role === 'ROLE_ENTREPRENEUR' ? <div>{children}</div> : <Navigate to={'/'}/>}
        </div>
    );
};
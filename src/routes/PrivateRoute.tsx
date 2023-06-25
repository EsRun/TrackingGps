import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ authenticated: boolean, component:Component}) => {

    return(
        authenticated?Component:<Navigate to="/login" {...alert("로그인 해")}></Navigate>
    )
}

export default PrivateRoute;
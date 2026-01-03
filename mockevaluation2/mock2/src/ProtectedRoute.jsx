import React from 'react'
import { Navigate } from "react-router-dom";
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';

const ProtectedRoute = ({children}) => {
  const {isAuth} = useContext(AuthContext);
  return isAuth?children:<Navigate to="/admin"/>
}

export default ProtectedRoute;

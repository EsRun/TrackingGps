import React, { Component } from "react";
import { Navigate } from "react-router-dom";

interface PrivateProps {
  authenticated: boolean;
  component: React.ReactNode | null;
}

const PrivateRoute: React.FC<PrivateProps> = ({ authenticated, component }) => {
  return authenticated ? component : <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;

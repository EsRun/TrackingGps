import React, { Component } from "react";
import { Navigate } from "react-router-dom";

interface PrivateProps {
  authenticated: boolean;
  component: JSX.Element;
}

const PrivateRoute = ({ authenticated, component }: PrivateProps) => {
  return authenticated ? component : <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;

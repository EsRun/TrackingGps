import React, { Component, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../redux/store";

interface PrivateProps {
  authenticated: boolean;
  component: JSX.Element;
}

const PrivateRoute = ({ authenticated, component }: PrivateProps) => {
  const auth = useSelector((state: RootState) => state.authSlice);
  useEffect(() => {
    console.log("auth= ", auth);
  }, [auth]);

  return authenticated ? component : <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;

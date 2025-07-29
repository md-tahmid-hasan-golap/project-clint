import React, { useContext } from "react";
import { AuthContext } from "../firebase/FirebaseAuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  if (!user) {
    return <Navigate state={location?.pathname} to={`/login`}></Navigate>;
  }
  return children;
};

export default PrivateRoute;

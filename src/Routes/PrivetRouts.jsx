import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRouts = ({ children }) => {
  const location = useLocation();
  const { currentuser, loading } = useContext(AuthContext);

  if (loading) {
    return "Loading";
  }

  if (currentuser) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivetRouts;

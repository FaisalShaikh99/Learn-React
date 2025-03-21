import React from "react";
import { Navigate } from "react-router-dom";

const privateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("currentUser");
  if (isAuthenticated) {
    children;
  } else {
    <Navigate to={"/login"} />;
  }
  return children
};

export default privateRoute;

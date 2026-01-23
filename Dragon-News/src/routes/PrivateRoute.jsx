import React, { use } from "react";
import { AuthContext } from "../provider/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { loading, user } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <span className="block loading loading-infinity loading-sm w-10 mx-auto"></span>
    );
  }
  if (!user) return <Navigate state={location.pathname} to="/auth"></Navigate>;

  return children;
};

export default PrivateRoute;

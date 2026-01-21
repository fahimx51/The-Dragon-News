import React, { use } from "react";
import { AuthContext } from "../provider/AuthContext";

const PrivateRoute = ({ children }) => {
  const { loading } = use(AuthContext);

  if (loading) {
    return <span className="block loading loading-infinity loading-sm w-10 mx-auto"></span>;
  }
  
  return children;
  
};

export default PrivateRoute;

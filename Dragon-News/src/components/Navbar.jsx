import React, { use } from "react";
import userIcon from "../assets/user.png";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthContext";
const Navbar = () => {
  const { user, logoutUser } = use(AuthContext);
  console.log(user);

  const handleLogout = () => {
    logoutUser().then(console.log("User Logout")).catch("Failed to loging out");
  };
  return (
    <div className="flex items-center justify-between">
      <div className="w-50"></div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">About</NavLink>
        <NavLink to="/">Carrer</NavLink>
      </div>

      {!user && (
        <div className="login-btn flex gap-3 items-center">
          <img src={userIcon} alt="user icon" />
          <Link to="/auth/login">
            <button className="btn btn-primary w-35">Login</button>
          </Link>
        </div>
      )}

      {user && (
        <div className="login-btn flex gap-3 items-center">
          <img
            className="h-15 w-15 rounded-full object-cover object-center border-1 border-secondary"
            src={user.photoURL}
            alt="user icon"
          />
          <Link to="/auth/login">
            <button onClick={handleLogout} className="btn btn-primary w-35">
              Logout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

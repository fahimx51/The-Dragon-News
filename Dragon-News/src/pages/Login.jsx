import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthContext";

const Login = () => {
  const { signInWithEmailPass } = use(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInWithEmailPass(email, password)
      .then(() => {
        console.log("successfully loged in");
      })
      .catch(() => {
        console.log("Error to login");
      });
  };

  return (
    <div className="flex justify-center mt-15">
      <div className="bg-base-100 w-4/11 flex flex-col justify-center items-center gap-8 p-20 rounded-lg">
        <h1 className="text-3xl text-primary font-semibold">
          Login your account
        </h1>
        <div className="border border-base-200 w-full"></div>

        <form onSubmit={handleLogin} className="px-10 space-y-8">
          <label className="font-semibold" htmlFor="">
            Email address
          </label>
          <input
            className="bg-base-200 rounded-md w-full h-15 p-5 mt-3 text-lg"
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
          />

          <label className="font-semibold" htmlFor="">
            Password
          </label>
          <input
            className="bg-base-200 rounded-md w-full h-15 p-5 mt-3 text-lg"
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
          <input
            className="btn btn-secondary w-full h-15 text-xl"
            type="submit"
            value="Login"
          />
        </form>

        <p className="text-primary hover:underline">
          <Link to="/auth/forget-password">Forget Password?</Link>
        </p>

        <p className="font-semibold text-accent">
          Don't Have an Account?{" "}
          <Link className="text-secondary" to="/auth/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

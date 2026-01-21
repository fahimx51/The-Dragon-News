import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../provider/AuthContext";
import { updateProfile } from "firebase/auth";

const Registration = () => {
  const { registerWithEmailPass } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    registerWithEmailPass(email, password)
      .then((res) => {
        updateProfile(res.user, {
            displayName : name,
            photoURL : photo,

        }).then().catch();
      })
      .catch(() => {
        // console.log(error);
      });
  };

  return (
    <div className="flex justify-center mt-5">
      <div className="bg-base-100 w-4/10 flex flex-col justify-center items-center gap-10 p-15 rounded-lg">
        <h1 className="text-3xl text-primary font-semibold">
          Register your account
        </h1>
        <div className="border border-base-200 w-full"></div>

        <form onSubmit={handleRegister} action="" className="px-10 space-y-5">
          <label className="font-semibold" htmlFor="">
            Your Name
          </label>
          <input
            className="bg-base-200 rounded-md w-full h-15 p-5 mt-3 text-lg"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label className="font-semibold" htmlFor="">
            Photo URL
          </label>
          <input
            className="bg-base-200 rounded-md w-full h-15 p-5 mt-3 text-lg"
            type="text"
            name="photoURL"
            placeholder="Enter your photo URL"
            required
          />
          <label className="font-semibold" htmlFor="">
            Email
          </label>
          <input
            className="bg-base-200 rounded-md w-full h-15 p-5 mt-3 text-lg"
            type="email"
            name="email"
            placeholder="Enter your email"
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
            pattern=".{6,}"
            title="Minimum 6 characters required"
            required
          />

          <input
            className="btn btn-secondary w-full h-15 text-xl"
            type="submit"
            value="Register"
          />
        </form>

        <p className="font-semibold text-accent">
          Already Have an Account?{" "}
          <Link className="text-secondary" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;

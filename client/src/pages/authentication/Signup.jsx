import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Signup = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupData);
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 p-20 w-lg bg-[rgba(0,0,0,0.1)] rounded-sm -translate-y-20 transform">
          <h1 className="text-center text-xl">Register</h1>
          <label className="input validator w-full">
            <FaUserAlt />
            <input
              type="text"
              required
              placeholder="Fullname"
              autoComplete="fullname"
              name="fullName"
              onChange={handleInputChange}
            />
          </label>
          <label className="input validator w-full">
            <FaUserAlt />
            <input
              type="text"
              required
              placeholder="Username"
              autoComplete="username"
              name="username"
              onChange={handleInputChange}
            />
          </label>
          <label className="input validator w-full">
            <FaKey />
            <input
              type="password"
              required
              placeholder="Password"
              autoComplete="current-password"
              name="password"
              onChange={handleInputChange}
            />
          </label>
          <label className="input validator w-full">
            <FaKey />
            <input
              type="password"
              required
              placeholder="Confirm Password"
              autoComplete="confirm-password"
              name="confirmPassword"
              onChange={handleInputChange}
            />
          </label>
          <div>
            <button className="btn btn-primary w-full" type="submit">
              Sign up
            </button>
          </div>
          <div>
            <p className="text-sm">
              Already have an account ?{" "}
              <NavLink className="underline text-blue-500" to={"/login"}>
                Login
              </NavLink>{" "}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;

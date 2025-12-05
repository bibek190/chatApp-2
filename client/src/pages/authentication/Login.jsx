import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", loginData);
    // Add API login code here
  };

  return (
    <div className="flex justify-center items-center p-8 min-h-screen">
      <div className="max-w-[30rem] w-full flex flex-col justify-center items-center gap-5 bg-base-300 p-6 rounded-md">
        <h1 className="text-2xl font-semibold">Login</h1>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
          {/* Username */}
          <label className="input input-bordered flex items-center gap-2 w-full">
            <FaUserAlt />
            <input
              type="text"
              name="username"
              className="grow"
              placeholder="Username"
              autoComplete="username"
              onChange={handleInputChange}
            />
          </label>

          {/* Password */}
          <label className="input input-bordered flex items-center gap-2 w-full">
            <FaKey />
            <input
              type="password"
              name="password"
              className="grow"
              placeholder="Password"
              autoComplete="current-password"
              onChange={handleInputChange}
            />
          </label>

          {/* Button */}
          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="flex flex-col items-center gap-2">
          <span>
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-400 underline">
              Sign Up
            </Link>
          </span>

          <Link className="text-sm underline">Forgot Password?</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

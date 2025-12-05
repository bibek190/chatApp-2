import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { Link } from "react-router-dom";

const Signup = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    setSignupData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(signupData);
  return (
    <div className="flex justify-center items-center p-8 min-h-screen">
      <div className="max-w-[30rem] w-full flex flex-col justify-center items-center gap-5 bg-base-300 p-6 rounded-md">
        <h1 className="text-2xl font-semibold">Signup</h1>

        <form className="w-full flex flex-col gap-5">
          <label className="input input-bordered flex items-center gap-2 w-full">
            <FaUserAlt />
            <input
              type="text"
              name="fullName"
              className="grow"
              placeholder="Full Name"
              autoComplete="name"
              onChange={handleInputChange}
            />
          </label>

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

          <label className="input input-bordered flex items-center gap-2 w-full">
            <FaKey />
            <input
              type="password"
              name="password"
              className="grow"
              placeholder="Password"
              autoComplete="new-password"
              onChange={handleInputChange}
            />
          </label>

          <label className="input input-bordered flex items-center gap-2 w-full">
            <FaKey />
            <input
              type="password"
              name="confirmPassword"
              className="grow"
              placeholder="Confirm Password"
              autoComplete="new-password"
              onChange={handleInputChange}
            />
          </label>

          <button className="btn btn-primary w-full">Signup</button>
        </form>

        <p className="flex flex-col items-center gap-1">
          <span>
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400 underline">
              Login
            </Link>
          </span>
          <Link className="text-sm underline">Forgot Password?</Link>
          <Link className="text-sm underline">Reset Password</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

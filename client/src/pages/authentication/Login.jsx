import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 p-20 w-lg bg-[rgba(0,0,0,0.1)] rounded-sm -translate-y-20 transform">
          <h1 className="text-center text-xl">Login</h1>
          <label className="input validator w-full">
            <FaUserAlt />
            <input
              type="text"
              required
              className="grow"
              placeholder="Username"
              name="username"
              autoComplete="username"
              onChange={handleInputChange}
            />
          </label>
          <label className="input validator w-full">
            <FaKey />
            <input
              type="password"
              required
              className="grow"
              placeholder="Password"
              name="password"
              autoComplete="current-password"
              onChange={handleInputChange}
            />
          </label>
          <div>
            <button className="btn btn-primary w-full" type="submit">
              Login
            </button>
          </div>
          <div>
            <p className="text-sm">
              Don't have an account ?{" "}
              <NavLink className="underline text-blue-500" to={"/signup"}>
                Signup
              </NavLink>{" "}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;

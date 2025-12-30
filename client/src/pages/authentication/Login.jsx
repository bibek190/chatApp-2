import React from "react";
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Signup from "./Signup";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/slice/user/user.slice";
import { loginUserThunk } from "../../store/slice/user/user.thunk";

const Login = () => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  // redux
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);
  console.log(isAuthenticated);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center pb-20">
      <form
        onSubmit={handleSubmit}
        className="max-w-[30rem] w-full flex gap-5 flex-col bg-base-300 p-6 rounded-lg"
      >
        <h2 className="text-2xl text-center">Login</h2>
        <label className="input input-bordered flex items-center gap-2 w-full">
          <FaUser />
          <input
            type="text"
            name="username"
            placeholder="Username"
            autoComplete="username"
            onChange={handleInput}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 w-full">
          <FaKey />
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="current-password"
            onChange={handleInput}
          />
        </label>
        <button className="btn btn-active btn-primary" type="submit">
          Login
        </button>
        <p>
          Don't have an account ?{" "}
          <Link to="/signup" className="text-blue-400">
            Signup
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;

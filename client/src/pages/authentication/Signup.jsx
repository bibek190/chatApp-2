import React from "react";
import { useState } from "react";
import { FaUser, FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center pb-20">
      <form
        onSubmit={handleSubmit}
        className="max-w-[30rem] w-full flex gap-5 flex-col bg-base-300 p-6 rounded-lg"
      >
        <h2 className="text-2xl text-center">Signup</h2>

        {/* Username */}
        <label className="input input-bordered flex items-center gap-2 w-full">
          <FaUser />
          <input
            name="username"
            onChange={handleChange}
            type="text"
            placeholder="Username"
            autoComplete="username"
          />
        </label>

        {/* Email */}
        <label className="input input-bordered flex items-center gap-2 w-full">
          <MdEmail />

          <input
            type="email"
            placeholder="Email"
            name="email"
            autoComplete="email"
            onChange={handleChange}
          />
        </label>

        {/* Password */}
        <label className="input input-bordered flex items-center gap-2 w-full">
          <FaKey />
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="new-password"
            onChange={handleChange}
          />
        </label>

        {/* Confirm Password */}
        <label className="input input-bordered flex items-center gap-2 w-full">
          <FaKey />
          <input
            type="password"
            name="confirmPassword"
            autoComplete="confirm-Password"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
        </label>

        <button className="btn btn-active btn-primary" type="submit">
          Signup
        </button>

        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;

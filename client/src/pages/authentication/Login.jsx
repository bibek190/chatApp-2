import React from "react";
import { FaUserAlt } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex justify-center p-6">
      <div className="max-w-[40rem] flex flex-col gap-5 bg-base-300 p-[60px] rounded-md">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Username" />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <input type="password" className="grow" placeholder="Password" />
        </label>
      </div>
    </div>
  );
};

export default Login;

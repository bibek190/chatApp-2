import React from "react";
import { FaSearch } from "react-icons/fa";
import User from "./User";

const UserSidebar = () => {
  return (
    <div className="max-w-[20rem] w-full h-screen flex flex-col border-r border-r-white/10  ">
      <h1 className="text-center text-2xl rounded-lg bg-black/25 px-2 py-3 text-[#7480ff] font-semibold">
        AppChat
      </h1>
      <div className="p-3">
        <label className="input">
          <FaSearch />
          <input type="search" className="grow" placeholder="Search" />
        </label>
      </div>
      <div className="h-full overflow-y-auto px-3 scroll-smooth">
        <User />
        <User />
      </div>
      <div className=" flex items-center justify-between p-2 ">
        <div className="avatar ">
          <div className="w-15 rounded-full ">
            <img src="https://img.daisyui.com/images/profile/demo/idiotsandwich@192.webp" />
          </div>
        </div>
        <button className="btn btn-primary btn-sm">Logout</button>
      </div>
    </div>
  );
};

export default UserSidebar;

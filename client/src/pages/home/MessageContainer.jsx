import React from "react";
import User from "./User";
import Message from "./Message";
import { IoSendSharp } from "react-icons/io5";

const MessageContainer = () => {
  return (
    <div className=" h-screen w-full p-3 flex flex-col">
      <User />
      <div className="p-2 border-b border-b-white/10"></div>
      <div className="h-full overflow-y-auto p-3 ">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <div className="p-3 flex gap-2">
        <input
          type="text"
          placeholder="Type here ..."
          className="input w-full"
        />
        <button className="btn btn-square btn-primary">
          <IoSendSharp />
        </button>
      </div>
    </div>
  );
};

export default MessageContainer;

import React from "react";
import Navbar from "../navbar/Navbar";
import UserSidebar from "./UserSidebar";
import MessageContainer from "./MessageContainer";

const Home = () => {
  return (
    <div className=" flex">
      <UserSidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;

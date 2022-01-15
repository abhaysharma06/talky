import React from "react";
import { Feed } from "../../components";
import { Rightbar } from "../../components";
import { Sidebar } from "../../components";
import { Topbar } from "../../components";
import "./home.css";

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;

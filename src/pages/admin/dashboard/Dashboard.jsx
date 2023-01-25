import React from "react";
import NavBar from "../../../components/navbar/NavBar";
import Sidebar from "../../../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <div className="dashboard-content">
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;

import React from "react";
import NavBar from "../../../components/navbar/NavBar";
import Sidebar from "../../../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/footer/Footer";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <div className="dashboard-content">
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;

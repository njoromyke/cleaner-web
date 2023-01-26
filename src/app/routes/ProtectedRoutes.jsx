import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouterComponent from "./routes";
import NavBar from "../../components/navbar/NavBar";

const ProtectedRoutes = () => {
  return (
    <Router basename="/">
      <NavBar />
      <RouterComponent />
    </Router>
  );
};

export default ProtectedRoutes;

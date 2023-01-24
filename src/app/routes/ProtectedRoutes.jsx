import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouterComponent from "./routes";

const ProtectedRoutes = () => {
  return (
    <Router basename="/">
      <RouterComponent />
    </Router>
  );
};

export default ProtectedRoutes;

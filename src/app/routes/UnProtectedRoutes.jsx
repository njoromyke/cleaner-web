import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "../../pages/auth/Login";

const UnProtectedRoutes = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default UnProtectedRoutes;

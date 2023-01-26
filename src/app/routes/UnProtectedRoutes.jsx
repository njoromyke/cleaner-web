import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "../../pages/auth/Login";
import SignUp from "../../pages/auth/SignUp";

const UnProtectedRoutes = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default UnProtectedRoutes;

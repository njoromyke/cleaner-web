import React from "react";
import NavBar from "./components/navbar/NavBar";
import ProtectedRoutes from "./app/routes/ProtectedRoutes";
import UnProtectedRoutes from "./app/routes/UnProtectedRoutes";

const App = () => {
  const user = "mike";
  return (
    <>
      <NavBar />

      {user ? <ProtectedRoutes /> : <UnProtectedRoutes />}
    </>
  );
};

export default App;

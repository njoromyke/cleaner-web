import React, { useState } from "react";
import NavBar from "../components/navbar/NavBar";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import UnProtectedRoutes from "./routes/UnProtectedRoutes";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";
import { ToastContainer } from "react-toastify";
import Loader from "../components/loader/Loader";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <div id="main-wrapper">
      <ToastContainer />
      {loading ? (
        <Loader />
      ) : user ? (
        <ProtectedRoutes />
      ) : (
        <UnProtectedRoutes />
      )}
    </div>
  );
};

export default App;

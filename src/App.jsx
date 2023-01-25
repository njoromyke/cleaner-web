import React from "react";
import NavBar from "./components/navbar/NavBar";
import ProtectedRoutes from "./app/routes/ProtectedRoutes";
import UnProtectedRoutes from "./app/routes/UnProtectedRoutes";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./services/firebase";

const App = () => {
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  console.log(user);

  return (
    <div id="main-wrapper">
      <NavBar />

      {!user ? <ProtectedRoutes /> : <UnProtectedRoutes />}
    </div>
  );
};

export default App;

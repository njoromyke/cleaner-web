import React, { useEffect, useState } from "react";
import { auth, database } from "../services/firebase";
import { collection, getDocs } from "firebase/firestore";
import { ADMIN_ROLE, SUPER_ADMIN_ROLE } from "../helpers/constants";

const useLoggedInUser = () => {
  const [user, setUser] = useState({});
  const authenticatedUser = auth.currentUser.email;

  const getLoggedInUser = () => {
    const usersCollection = collection(database, "users");
    getDocs(usersCollection).then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().email === authenticatedUser) {
          setUser(doc.data());
        }
      });
    });
  };

  useEffect(getLoggedInUser, [authenticatedUser]);

  const isAdmin = user.role === ADMIN_ROLE || SUPER_ADMIN_ROLE;

  return { user, isAdmin };
};

export default useLoggedInUser;

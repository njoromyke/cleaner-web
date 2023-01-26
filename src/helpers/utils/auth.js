import { collection, getDocs } from "firebase/firestore";
import { auth, database } from "../../services/firebase";

const getLoggedInUser = () => {
  const usersCollection = collection(database, "users");
  const users = getDocs(usersCollection).then((snap) => {
    return snap;
  });
  return users;
};

export const isAdmin = (role) => {
  const users = getLoggedInUser();

  console.log(users);
};

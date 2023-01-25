import { collection, getDocs } from "firebase/firestore";
import { auth, database } from "../../services/firebase";

export const isAdmin = (role) => {
//   const user = auth.currentUser.email;

//   const usersCollection = collection(database, "users");

//   getDocs(usersCollection).then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       if (doc.data()?.email === user) {
//         return doc.data().role === role;
//       }
//     });
//   });
  return true;
};

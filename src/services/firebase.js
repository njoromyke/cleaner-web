// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4V3pjFMbc2PJRBZb-L_DSxo7NeFF2NWY",
  authDomain: "cleaner-56a55.firebaseapp.com",
  projectId: "cleaner-56a55",
  storageBucket: "cleaner-56a55.appspot.com",
  messagingSenderId: "856950028644",
  appId: "1:856950028644:web:d7564bb3ac3f557df82271",
  measurementId: "G-3BXFFK7QFN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);

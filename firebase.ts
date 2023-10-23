import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// web firebase configuration 
const firebaseConfig = {
  apiKey: "AIzaSyDGDc8kOLc0Q3csyseQO5lF3BIVcsqN_Mg",
  authDomain: "talk-translator-5513a.firebaseapp.com",
  projectId: "talk-translator-5513a",
  storageBucket: "talk-translator-5513a.appspot.com",
  messagingSenderId: "981427313812",
  appId: "1:981427313812:web:5b493127c98b64ffa1a881",
  measurementId: "G-JZFH3G2C9G"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
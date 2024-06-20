import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4Np9K6ez1GgEL3FSvANlSLSszOv1L_K4",
  authDomain: "socialmedia-380f6.firebaseapp.com",
  projectId: "socialmedia-380f6",
  storageBucket: "socialmedia-380f6.appspot.com",
  messagingSenderId: "210632788087",
  appId: "1:210632788087:web:24d554049b75bc2fdf9e72",
  measurementId: "G-81S0FFC4Q4"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };

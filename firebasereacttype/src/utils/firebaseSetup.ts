// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSi0GGp3BTl7vdbE7mjLLFKWrBbgHMQtI",
  authDomain: "fir-auth-tut-e6e28.firebaseapp.com",
  projectId: "fir-auth-tut-e6e28",
  storageBucket: "fir-auth-tut-e6e28.appspot.com",
  messagingSenderId: "679868252364",
  appId: "1:679868252364:web:17e7e67d7321c44d794269"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
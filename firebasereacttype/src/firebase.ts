import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRf2CT8x-psQJwAsMjuZydstmdBoRKp1M",
  authDomain: "fir-authentication-53ae1.firebaseapp.com",
  projectId: "fir-authentication-53ae1",
  storageBucket: "fir-authentication-53ae1.appspot.com",
  messagingSenderId: "13490717944",
  appId: "1:13490717944:web:921f54d15dd4c402f5a70d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
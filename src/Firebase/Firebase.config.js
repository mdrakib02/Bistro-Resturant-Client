// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiW1imc9lUvFdbyY9JeSqwPV6AY5m9gOw",
  authDomain: "bistro-boss-51a5b.firebaseapp.com",
  projectId: "bistro-boss-51a5b",
  storageBucket: "bistro-boss-51a5b.firebasestorage.app",
  messagingSenderId: "491484665226",
  appId: "1:491484665226:web:3c35a62115529d82cae473",
  measurementId: "G-FD8KGME3HF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Auth = getAuth(app);
export default Auth
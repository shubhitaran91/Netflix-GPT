// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDb78QnsnSyiOIkfzu93dF45zp4i2I8yrk",
  authDomain: "netflixgpt-8d698.firebaseapp.com",
  projectId: "netflixgpt-8d698",
  storageBucket: "netflixgpt-8d698.firebasestorage.app",
  messagingSenderId: "92407347816",
  appId: "1:92407347816:web:35f535d47de47f7f1b59dd",
  measurementId: "G-453JTHJ8F2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
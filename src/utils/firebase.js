// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSEtdbzu03ZGty138XUgxsXoYQLCgJ4lI",
  authDomain: "netflixgpt-88c76.firebaseapp.com",
  projectId: "netflixgpt-88c76",
  storageBucket: "netflixgpt-88c76.firebasestorage.app",
  messagingSenderId: "643193683940",
  appId: "1:643193683940:web:74a8f42439f3436cb151f1",
  measurementId: "G-F0N5HKQCBL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
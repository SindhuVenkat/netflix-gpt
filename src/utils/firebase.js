// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV4Iq1lppM_ucD9lvRk_cRXyTNAHgPL_M",
  authDomain: "netflixgpt-61e65.firebaseapp.com",
  projectId: "netflixgpt-61e65",
  storageBucket: "netflixgpt-61e65.appspot.com",
  messagingSenderId: "113419388887",
  appId: "1:113419388887:web:d1c194c47b3efcf038ed92",
  measurementId: "G-Z81SCEBV4N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
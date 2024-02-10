// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeWqQIL_aLAGkXoWvDV16hznNheYpifNo",
  authDomain: "netflixgpt-5f825.firebaseapp.com",
  projectId: "netflixgpt-5f825",
  storageBucket: "netflixgpt-5f825.appspot.com",
  messagingSenderId: "110623775769",
  appId: "1:110623775769:web:c2b9b5d9c50b7c695ade88",
  measurementId: "G-Q0CPYYH1W4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwxjZaNFC17iL_i8ul360vWTv0PXLHD5U",
  authDomain: "user-authentication-3d924.firebaseapp.com",
  projectId: "user-authentication-3d924",
  storageBucket: "user-authentication-3d924.appspot.com",
  messagingSenderId: "151524692500",
  appId: "1:151524692500:web:ecf495e3e9072959680d01",
  measurementId: "G-9WZW0V2FN8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
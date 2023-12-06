// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUNqe2XPJnHwhKhuxJ2ybsn7JaIB45brM",
  authDomain: "flexicart-89b0d.firebaseapp.com",
  projectId: "flexicart-89b0d",
  storageBucket: "flexicart-89b0d.appspot.com",
  messagingSenderId: "339081955675",
  appId: "1:339081955675:web:97084b386361ccc426b27e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG7hyhToXEn8cYrh8SR7Gfv41lZ7aRVHY",
  authDomain: "prototype-ro.firebaseapp.com",
  projectId: "prototype-ro",
  storageBucket: "prototype-ro.appspot.com",
  messagingSenderId: "71652806559",
  appId: "1:71652806559:web:9f3b50a742b9c58426b7aa"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

export default appFirebase;


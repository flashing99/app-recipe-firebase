/*
 // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries 
*/

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7Mw6dioXwQzgCyVkaIqkHgQhPrff0ldM",
  authDomain: "recette2022-4e5e5.firebaseapp.com",
  projectId: "recette2022-4e5e5",
  storageBucket: "recette2022-4e5e5.appspot.com",
  messagingSenderId: "540024359694",
  appId: "1:540024359694:web:88186979e8f3190d8de55f",
};

/* // Initialize Firebase
const app = initializeApp(firebaseConfig);
 */
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

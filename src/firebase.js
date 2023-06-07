// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"; //copy tại: "https://firebase.google.com/docs/storage/web/start?authuser=0"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBi7YWPgJrX3nfH1CeQeecJxZad7V__oCE",
  authDomain: "tung-34886.firebaseapp.com",
  projectId: "tung-34886",
  storageBucket: "tung-34886.appspot.com",
  messagingSenderId: "622452704247",
  appId: "1:622452704247:web:3ac1ce2834bd11ff7164f2",
  measurementId: "G-K2KD4XH4K9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app); //copy tại: "https://firebase.google.com/docs/storage/web/start?authuser=0"

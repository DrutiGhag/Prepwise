// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfwhIMVmwWJNrFW8aZ7D2lSmy6mOUkohM",
  authDomain: "prepwise-71b5a.firebaseapp.com",
  projectId: "prepwise-71b5a",
  storageBucket: "prepwise-71b5a.firebasestorage.app",
  messagingSenderId: "123996575368",
  appId: "1:123996575368:web:139627043d88e46d0cf13d",
  measurementId: "G-47Q4VYJMVG"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);

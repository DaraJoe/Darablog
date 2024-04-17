// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "darablog-417509.firebaseapp.com",
  projectId: "darablog-417509",
  storageBucket: "darablog-417509.appspot.com",
  messagingSenderId: "511573483143",
  appId: "1:511573483143:web:1db0cce646d9826a85e222"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_oRFW4amtcDHxBgulC_MPc1Zma1NYwGw",
  authDomain: "online-canteen-96ad8.firebaseapp.com",
  projectId: "online-canteen-96ad8",
  storageBucket: "online-canteen-96ad8.appspot.com",
  messagingSenderId: "358362698056",
  appId: "1:358362698056:web:691a726d7ab844ed3b637d",
  measurementId: "G-GHCCT49M19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)
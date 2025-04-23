// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCV97ip6Vfs8Qm9ewF1qLbcI2Vsmsd8xBM",
  authDomain: "smarthire-d5a67.firebaseapp.com",
  projectId: "smarthire-d5a67",
  storageBucket: "smarthire-d5a67.firebasestorage.app",
  messagingSenderId: "39009868227",
  appId: "1:39009868227:web:14953359427f82ead80576",
  measurementId: "G-5LMSPGFYL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
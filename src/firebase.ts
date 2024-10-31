// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "bostany-50b99.firebaseapp.com",
  projectId: "bostany-50b99",
  storageBucket: "bostany-50b99.appspot.com",
  messagingSenderId: "169717228460",
  appId: "1:169717228460:web:3de3d8478f0e639d381009",
  measurementId: "G-2K5EMVYPFL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw-o7hXDmivDZEo4130X_y2jp1n39_0PM",
  authDomain: "proyecto-react-f77ba.firebaseapp.com",
  projectId: "proyecto-react-f77ba",
  storageBucket: "proyecto-react-f77ba.appspot.com",
  messagingSenderId: "722840908218",
  appId: "1:722840908218:web:526f1e8a598bbb5be92d83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const baseDeDatos = getFirestore(app);
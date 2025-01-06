import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACKkGLnDaZZzZOppCMoq1PFhl1eOqa9c0",
  authDomain: "portfolio-tbe.firebaseapp.com",
  projectId: "portfolio-tbe",
  storageBucket: "portfolio-tbe.firebasestorage.app",
  messagingSenderId: "671582741653",
  appId: "1:671582741653:web:4e8b92c5a0a1be31f8279c",
  measurementId: "G-BW811LE6W4",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };


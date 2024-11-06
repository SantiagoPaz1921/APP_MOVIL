// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAjb7J2dERRhomUTy0V12-4h-2Tg4iF3Fc",
  authDomain: "appacuican-a2e11.firebaseapp.com",
  projectId: "appacuican-a2e11",
  storageBucket: "appacuican-a2e11.firebasestorage.app",
  messagingSenderId: "644369694607",
  appId: "1:644369694607:web:b14b159664a2ac5f0355fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };


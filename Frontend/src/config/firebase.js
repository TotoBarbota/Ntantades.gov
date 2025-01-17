// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZfSXBWodT7QaRmn8mJDrwU-AnfxEChtY",
  authDomain: "ntantades-demo.firebaseapp.com",
  projectId: "ntantades-demo",
  storageBucket: "ntantades-demo.firebasestorage.app",
  messagingSenderId: "981618504008",
  appId: "1:981618504008:web:c6d7ad1386500ea9c3037d",
  measurementId: "G-ZQK62DRTZ4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

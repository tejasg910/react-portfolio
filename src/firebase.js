// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCLMGSyKfmkXeA2koX6sfV9sOrmULogWKo",
  authDomain: "tejas-portfolio-6d13c.firebaseapp.com",
  projectId: "tejas-portfolio-6d13c",
  storageBucket: "tejas-portfolio-6d13c.appspot.com",
  messagingSenderId: "741741776012",
  appId: "1:741741776012:web:53211898842722fac5bfa9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();

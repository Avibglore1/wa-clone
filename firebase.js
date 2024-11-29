// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGyrJSzRlCXWbgudwPiseO3fKOt0A8alQ",
  authDomain: "wa-clone-e1fae.firebaseapp.com",
  projectId: "wa-clone-e1fae",
  storageBucket: "wa-clone-e1fae.firebasestorage.app",
  messagingSenderId: "777541478289",
  appId: "1:777541478289:web:45d285339059faba90dc30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage();
const db = getFirestore();
const auth = getAuth(app);
export {auth,db,storage}
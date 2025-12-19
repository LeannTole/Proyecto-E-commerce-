// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuZxceqh7_p0fW_pbyJLSKmRrakar7Y_Q",
  authDomain: "toledo-coder-flex-81725.firebaseapp.com",
  projectId: "toledo-coder-flex-81725",
  storageBucket: "toledo-coder-flex-81725.firebasestorage.app",
  messagingSenderId: "924838047268",
  appId: "1:924838047268:web:cbf2beaf848419360b32b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

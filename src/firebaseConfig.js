// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY2uqjeYzv98G5P46ia8cI0qgumNUDyjk",
  authDomain: "zooarcadia-1f4ea.firebaseapp.com",
  projectId: "zooarcadia-1f4ea",
  storageBucket: "zooarcadia-1f4ea.appspot.com",
  messagingSenderId: "35500701720",
  appId: "1:35500701720:web:eb6982a6b3b9233b896b6d",
  measurementId: "G-QMRXWGZ4MY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, db, storage };

// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv2ybCDCEVrdevXzj98cHz49l1d4mUb_k",
  authDomain: "zooarcadia-7c3cb.firebaseapp.com",
  projectId: "zooarcadia-7c3cb",
  storageBucket: "zooarcadia-7c3cb.appspot.com",
  messagingSenderId: "670259634641",
  appId: "1:670259634641:web:30719162ebdeed52eb00f0",
  measurementId: "G-CJGDX1D9Y2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, db, storage };

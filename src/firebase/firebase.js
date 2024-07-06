// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDKPDA-plhqbOrTSssDCjbDk9yMyRxmm3Q",
  authDomain: "contactform-455a0.firebaseapp.com",
  projectId: "contactform-455a0",
  storageBucket: "contactform-455a0.appspot.com",
  messagingSenderId: "426193595242",
  appId: "1:426193595242:web:2c375fdbecbd1c5a3c1313",
  // databaseURL: "https://contactform-455a0.firebaseio.com"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
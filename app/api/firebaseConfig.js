import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLANx0Fy-FWNBRDCsE-5JzSpXsE72dslw",
  authDomain: "attendees-e10f5.firebaseapp.com",
  projectId: "attendees-e10f5",
  storageBucket: "attendees-e10f5.appspot.com",
  messagingSenderId: "635896193361",
  appId: "1:635896193361:web:d405abbd80cbc986a1f370",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };

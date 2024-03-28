import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
export interface User {
  name: string;
  savedHour: string;
}
const firebaseConfig = {
  apiKey: "AIzaSyDjrRuufcgHbGinA7odO1ZPpgtu3aZHVYY",
  authDomain: "salon21-6f0f3.firebaseapp.com",
  projectId: "salon21-6f0f3",
  storageBucket: "salon21-6f0f3.appspot.com",
  messagingSenderId: "726773393493",
  appId: "1:726773393493:web:f9b2b0bc87674bd0a24cdc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db, firebaseConfig };

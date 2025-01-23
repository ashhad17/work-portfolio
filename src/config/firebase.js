import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBFARNNeX3pGxH4-eEwWseHhVM0KeOJCgk",
  authDomain: "myportfolio-2105.firebaseapp.com",
  projectId: "myportfolio-2105",
  storageBucket: "myportfolio-2105.firebasestorage.app",
  messagingSenderId: "208953892630",
  appId: "1:208953892630:web:5db3e96964624bb0e1ba37",
  measurementId: "G-47DB0MW252"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };


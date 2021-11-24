import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from '@firebase/storage';
//import { getStorage } from "firebase/storage";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyASKvWryQX50g9Tf6VS9ZWCnbqVcLqS7rA",
    authDomain: "capstone-ecommerce-f050a.firebaseapp.com",
    projectId: "capstone-ecommerce-f050a",
    storageBucket: "capstone-ecommerce-f050a.appspot.com",
    messagingSenderId: "403165035859",
    appId: "1:403165035859:web:ac0f338f6a388576b4f5a6"
  };
  const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


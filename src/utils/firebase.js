import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from '@firebase/storage';
//import { getStorage } from "firebase/storage";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBxFCFEF7XICubpyCvpnfCKGZKD81FJeuA",
  authDomain: "midterm-4th-year-29426.firebaseapp.com",
  projectId: "midterm-4th-year-29426",
  storageBucket: "midterm-4th-year-29426.appspot.com",
  messagingSenderId: "343266854129",
  appId: "1:343266854129:web:6e7b7d3767d3f38d0a9550",
  measurementId: "G-8LSER1GD13"
  };
  const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

/**
apiKey: "AIzaSyCFHwhvdSWeh3UG-ur1lMBRi2A9irp3E1M",
  authDomain: "midterm-4th-year.firebaseapp.com",
  projectId: "midterm-4th-year",
  storageBucket: "midterm-4th-year.appspot.com",
  messagingSenderId: "747362732932",
  appId: "1:747362732932:web:20ecc0842d2ff0582c6bd1"
*/
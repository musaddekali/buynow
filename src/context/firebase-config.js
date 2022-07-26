import { initializeApp } from "firebase/app";
import { enableIndexedDbPersistence, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGEING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth();

// Offlie Access firebase data
enableIndexedDbPersistence(db)
  .catch((err) => {
      if (err.code === 'failed-precondition') {
          console.log('Offline data failed');
      } else if (err.code === 'unimplemented') {
          console.log('Could not work in offline data. Your Browser does not support all features.');
      }
  });



  // REACT_APP_API_KEY = AIzaSyDA_izUz-9qBeQ9HQaox9yUV3-f-juQp2c
  // REACT_APP_AUTH_DOMAIN  = buynow-ab983.firebaseapp.com
  // REACT_APP_PROJECT_ID = buynow-ab983
  // REACT_APP_STORAGE_BUCKET = buynow-ab983.appspot.com
  // REACT_APP_MESSAGEING_SENDER_ID = 1095260388057
  // REACT_APP_APP_ID = 1:1095260388057:web:909f77c9626ce130e21cc8




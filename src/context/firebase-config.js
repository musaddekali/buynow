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



// firebase keys.
// REACT_APP_API_KEY = AIzaSyCBODWPaNdG2vwFMf_TcRVnOGBPQUrPjSk
// REACT_APP_AUTH_DOMAIN  = buynow-1.firebaseapp.com
// REACT_APP_PROJECT_ID = buynow-1
// REACT_APP_STORAGE_BUCKET = buynow-1.appspot.com
// REACT_APP_MESSAGEING_SENDER_ID = 35338344803
// REACT_APP_APP_ID = 1:35338344803:web:8ffbcced79b361996c5b56




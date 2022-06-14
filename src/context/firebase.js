import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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



// firebase keys.
// REACT_APP_API_KEY = AIzaSyCBODWPaNdG2vwFMf_TcRVnOGBPQUrPjSk
// REACT_APP_AUTH_DOMAIN  = buynow-1.firebaseapp.com
// REACT_APP_PROJECT_ID = buynow-1
// REACT_APP_STORAGE_BUCKET = buynow-1.appspot.com
// REACT_APP_MESSAGEING_SENDER_ID = 35338344803
// REACT_APP_APP_ID = 1:35338344803:web:8ffbcced79b361996c5b56




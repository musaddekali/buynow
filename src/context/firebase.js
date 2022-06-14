import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBODWPaNdG2vwFMf_TcRVnOGBPQUrPjSk",
  authDomain: "buynow-1.firebaseapp.com",
  projectId: "buynow-1",
  storageBucket: "buynow-1.appspot.com",
  messagingSenderId: "35338344803",
  appId: "1:35338344803:web:8ffbcced79b361996c5b56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXExw-OONzq1i5ql-PjbCuq7ykmXTaxFM",
  authDomain: "sdmdb-c0b86.firebaseapp.com",
  projectId: "sdmdb-c0b86",
  storageBucket: "sdmdb-c0b86.appspot.com",
  messagingSenderId: "296754867065",
  appId: "1:296754867065:web:7617044ef808d8f6611da8",
};

initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };

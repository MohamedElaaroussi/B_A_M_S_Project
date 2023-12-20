// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { getStorage } from "firebase/storage";
import {getFirestore} from 'firebase/firestore'




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1Wcxz4WjmbGtTbX8QHy96tiZNaIKoOTo",
  authDomain: "projetbams-f2908.firebaseapp.com",
  projectId: "projetbams-f2908",
  storageBucket: "projetbams-f2908.appspot.com",
  messagingSenderId: "729501878595",
  appId: "1:729501878595:web:11a4df972c647f80eac7f6",
  measurementId: "G-MP8T2CVGWF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
export const storage = getStorage(app);
export const db = getFirestore(app);



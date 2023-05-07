import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBAPo4nxLPDVGM7lUcVf5XX3stp7t3Lgh0",
  authDomain: "nounous-fde72.firebaseapp.com",
  projectId: "nounous-fde72",
  storageBucket: "nounous-fde72.appspot.com",
  messagingSenderId: "812463740769",
  appId: "1:812463740769:web:60159949fdf4428c0a5720",
  measurementId: "G-NBSJ6TNZ7X",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
// export const auth = getAuth(app);

/*

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAPo4nxLPDVGM7lUcVf5XX3stp7t3Lgh0",
  authDomain: "nounous-fde72.firebaseapp.com",
  projectId: "nounous-fde72",
  storageBucket: "nounous-fde72.appspot.com",
  messagingSenderId: "812463740769",
  appId: "1:812463740769:web:60159949fdf4428c0a5720",
  measurementId: "G-NBSJ6TNZ7X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/

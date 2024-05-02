// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "data-67456.firebaseapp.com",
  databaseURL: "https://data-67456-default-rtdb.firebaseio.com",
  projectId: "data-67456",
  storageBucket: "data-67456.appspot.com",
  messagingSenderId: "654558226121",
  appId: "1:654558226121:web:1a9eaae7be72dc8c1bcf18",
  measurementId: "G-R5Z4N9MYXJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

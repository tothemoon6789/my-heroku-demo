// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBM3jBbC39f44iFNYhgnSM_UjRMHBZSILc",
  authDomain: "demoweb-dfdad.firebaseapp.com",
  projectId: "demoweb-dfdad",
  storageBucket: "demoweb-dfdad.appspot.com",
  messagingSenderId: "236976378384",
  appId: "1:236976378384:web:12999d3338ba2d9b473095",
  measurementId: "G-PY8XZ577SE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
// const database = getDatabase(app);
export default app;
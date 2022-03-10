import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyCcFOhaKtqCwI5FpJjD8379NVBIjZlJO0M",
    authDomain: "upbeat-resolver-342516.firebaseapp.com",
    projectId: "upbeat-resolver-342516",
    storageBucket: "upbeat-resolver-342516.appspot.com",
    messagingSenderId: "480328642115",
    appId: "1:480328642115:web:a841f9409079e4893baef6",
    measurementId: "G-XQ2E1ER2F8"
  };


  const app = initializeApp(firebaseConfig);
  


  const auth = getAuth(app);
  const googleAuthProvider = new auth.GoogleAuthProvider();
  const facebookAuthProvider = new auth.FacebookAuthProvider();

  export  { auth, googleAuthProvider, facebookAuthProvider };

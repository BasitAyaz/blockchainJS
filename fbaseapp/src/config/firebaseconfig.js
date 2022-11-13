// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfhDKSajoOKs6Pg6x6e2esunI7HjuLmYU",
  authDomain: "blockchainjs-90685.firebaseapp.com",
  projectId: "blockchainjs-90685",
  storageBucket: "blockchainjs-90685.appspot.com",
  messagingSenderId: "399756341718",
  appId: "1:399756341718:web:250cbe02d432de2197b477",
  measurementId: "G-K3JLDM9LJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBHuGtuY_iQ7Q3FKtkj9FuI2kVVySfULI",
  authDomain: "ema-john-simple-2bac8.firebaseapp.com",
  projectId: "ema-john-simple-2bac8",
  storageBucket: "ema-john-simple-2bac8.appspot.com",
  messagingSenderId: "791356334028",
  appId: "1:791356334028:web:cc1187476fb37be3cc8769"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";




const firebaseConfig = {
  apiKey: "import.meta.env.VITE_FIREBASE_API",
  authDomain: "clone-f30ba.firebaseapp.com",
  projectId: "clone-f30ba",
  storageBucket: "clone-f30ba.appspot.com",
  messagingSenderId: "987532417517",
  appId: "1:987532417517:web:0b94487d7a0cc4b27befe4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();


export default app;
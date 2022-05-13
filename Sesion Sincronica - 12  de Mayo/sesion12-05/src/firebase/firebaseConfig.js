// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB4ATI0M6RNX2Xywal8vuaVBW8s1KDXO-A",
    authDomain: "sesion12-05-v1.firebaseapp.com",
    projectId: "sesion12-05-v1",
    storageBucket: "sesion12-05-v1.appspot.com",
    messagingSenderId: "563547990230",
    appId: "1:563547990230:web:8b5782d091ece857888177"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const facebook = new FacebookAuthProvider();

export {
    app,
    db,
    facebook
}

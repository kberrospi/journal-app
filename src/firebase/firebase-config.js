import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCaV0RWmPKSdRV5yGq2L9LU3sardkgUsTQ",
  authDomain: "react-app-curso-8e9bd.firebaseapp.com",
  projectId: "react-app-curso-8e9bd",
  storageBucket: "react-app-curso-8e9bd.appspot.com",
  messagingSenderId: "773370172293",
  appId: "1:773370172293:web:b22d5ed2c4c3c6362feaec"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleProvider,
  firebase
}
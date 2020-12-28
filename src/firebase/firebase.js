import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD_npJZu-FkHFh_Ey2QaVWaHMo1VEXWemY",
  authDomain: "railway-6b92c.firebaseapp.com",
  projectId: "railway-6b92c",
  storageBucket: "railway-6b92c.appspot.com",
  messagingSenderId: "861612733593",
  appId: "1:861612733593:web:4c01abf0d8cb2afd72f408",
  measurementId: "G-NTD92BDWFR",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth, firebaseApp };

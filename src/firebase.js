import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCSGioVFrOVyHUfBev6pARU6PzZqdH2r8Q",
  authDomain: "royal-store-cfa84.firebaseapp.com",
  projectId: "royal-store-cfa84",
  storageBucket: "royal-store-cfa84.appspot.com",
  messagingSenderId: "291248105957",
  appId: "1:291248105957:web:94cf12606998e12e7de70c",
  measurementId: "G-JH65VL3YQ8",
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  // export
  // export default firebase;
  export const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

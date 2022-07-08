import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration

export const firebaseConfig = {
  apiKey: "AIzaSyA86dikafSmY03niowiD6t8KysaqGuhUjA",
  authDomain: "newproject-e0374.firebaseapp.com",
  projectId: "newproject-e0374",
  storageBucket: "newproject-e0374.appspot.com",
  messagingSenderId: "516864209573",
  appId: "1:516864209573:web:a9365a440a81a5be6d934c",
  measurementId: "G-VZDKE6MBTD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig); // Connect to firebase project
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;

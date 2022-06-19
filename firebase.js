import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1CJ9O2kBebQDqlU60-m2JRbXsEPBxXAs",
  authDomain: "amzn-projt.firebaseapp.com",
  projectId: "amzn-projt",
  storageBucket: "amzn-projt.appspot.com",
  messagingSenderId: "943746888928",
  appId: "1:943746888928:web:748c19c53c12a5ff7a8c85",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;

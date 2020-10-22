import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCLhwW7Ll7K-J0c9TVSvYVsi8Ge9zvWwto",
  authDomain: "messenger-ff34d.firebaseapp.com",
  databaseURL: "https://messenger-ff34d.firebaseio.com",
  projectId: "messenger-ff34d",
  storageBucket: "messenger-ff34d.appspot.com",
  messagingSenderId: "345342562391",
  appId: "1:345342562391:web:54f86c9ed24e6796df9312",
  measurementId: "G-3YRJGG5FCM",
});

const db = firebaseApp.firestore();

export default db;

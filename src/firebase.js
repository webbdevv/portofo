import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCUnFVJz9p9b3aKgC1pH-Pf83Cd7nU3r3c",
    authDomain: "personal-portfolio-ff03e.firebaseapp.com",
    projectId: "personal-portfolio-ff03e",
    storageBucket: "personal-portfolio-ff03e.appspot.com",
    messagingSenderId: "301465003042",
    appId: "1:301465003042:web:e26e9fe13973732977967b",
    measurementId: "G-HH7SVDLFX7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
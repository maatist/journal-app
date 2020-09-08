import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAgT_yIL4mwsbchCttt--viaYhqAEGJu2A",
    authDomain: "react-app-d9d31.firebaseapp.com",
    databaseURL: "https://react-app-d9d31.firebaseio.com",
    projectId: "react-app-d9d31",
    storageBucket: "react-app-d9d31.appspot.com",
    messagingSenderId: "778665472977",
    appId: "1:778665472977:web:2ab0ba47bdf34e63ae26f0"
  };

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
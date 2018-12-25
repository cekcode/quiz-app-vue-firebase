import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyCWzAh-ZkcFbw9TMnq-PsjJwJzoclGO0yk",
    authDomain: "quiz-app-5ca95.firebaseapp.com",
    databaseURL: "https://quiz-app-5ca95.firebaseio.com",
    projectId: "quiz-app-5ca95",
    storageBucket: "quiz-app-5ca95.appspot.com",
    messagingSenderId: "36286447672"
});

export default firebase;
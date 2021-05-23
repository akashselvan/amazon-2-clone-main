import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC7nUSL9JjgAP6fv95rleqn6V14sH3bgSc",
    authDomain: "whatsapp-9bc56.firebaseapp.com",
    databaseURL: "https://whatsapp-9bc56.firebaseio.com",
    projectId: "whatsapp-9bc56",
    storageBucket: "whatsapp-9bc56.appspot.com",
    messagingSenderId: "870286108108",
    appId: "1:870286108108:web:ae76786756ecec41276969",
    measurementId: "G-F119YVHHWT"
};

const app = !firebase.apps.length
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

export const db = app.firestore();

// no analitycs

// go authentication
// enable google
// valid email
// web sdk configuration
// change .env

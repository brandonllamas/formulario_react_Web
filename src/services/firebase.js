import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDIF0CN-P5h77OqG4eGtdJhXCnSoYh-LYo",
    authDomain: "reacttest-a46d9.firebaseapp.com",
    projectId: "reacttest-a46d9",
    storageBucket: "reacttest-a46d9.appspot.com",
    messagingSenderId: "566545497996",
    appId: "1:566545497996:web:405d62932870d299f860a9",
    measurementId: "G-7GX6TNL1G0"
};
// Initialize Firebase
var fire = firebase.initializeApp(firebaseConfig);

export { fire };
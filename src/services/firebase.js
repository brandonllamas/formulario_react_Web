import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCvPcWO5stltCXkQyJYYKsR-Qi-vNWVk3M",
    authDomain: "reactv2-13e9f.firebaseapp.com",
    projectId: "reactv2-13e9f",
    storageBucket: "reactv2-13e9f.appspot.com",
    messagingSenderId: "162011126858",
    appId: "1:162011126858:web:9887c03e6645f5664f1ab3",
    measurementId: "G-R6ZYT1DQD4"
};
// Initialize Firebase
var fire = firebase.initializeApp(firebaseConfig);

export { fire };
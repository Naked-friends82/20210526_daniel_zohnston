import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDkwvTGJFr7OCdt2J83N7BSOIBxf9zvCeg",
    authDomain: "nfs82daniel.firebaseapp.com",
    projectId: "nfs82daniel",
    storageBucket: "nfs82daniel.appspot.com",
    messagingSenderId: "547246199968",
    appId: "1:547246199968:web:969835c117b2b2678ea5c5",
    measurementId: "G-2KEJ4BBZJN"
};

// const analysis = firebase.analytics();
firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const dbService = firebase.firestore();


// export const firebaseInstance = firebase;
// export const authService = firebase.auth();
// export const dbService = firebase.firestore();





// const firebaseConfig = {
//     apiKey: "AIzaSyAv8C-Cl1KPoBmkBDojr_TF7AdlJlKV5w4",
//     authDomain: "nwitter-abb56.firebaseapp.com",
//     projectId: "nwitter-abb56",
//     storageBucket: "nwitter-abb56.appspot.com",
//     messagingSenderId: "491164898779",
//     appId: "1:491164898779:web:746c8f6982b9abafc003fe"
// };

// firebase.initializeApp(firebaseConfig);
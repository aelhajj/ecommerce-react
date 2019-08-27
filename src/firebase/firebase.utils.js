import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
    authDomain: "ecommerce-db-86cfb.firebaseapp.com",
    databaseURL: "https://ecommerce-db-86cfb.firebaseio.com",
    projectId: "ecommerce-db-86cfb",
    storageBucket: "",
    messagingSenderId: "1055756821375",
    appId: "1:1055756821375:web:5d07d2d9fd80dbe9"
};

firebase.initializeApp(firebaseConfig);

//export firebase authentification for further use in app
export const auth = firebase.auth();
//export firestore for further use in app storage 
export const firestore = firebase.firestore();

//triggers the google pop-up for sign-in auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

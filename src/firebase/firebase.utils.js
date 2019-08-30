import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
    authDomain: "ecommerce-db-86cfb.firebaseapp.com",
    main: "ecommerce-db-86cfb.firebaseapp.com",
    databaseURL: "https://ecommerce-db-86cfb.firebaseio.com",
    projectId: "ecommerce-db-86cfb",
    storageBucket: "",
    messagingSenderId: "1055756821375",
    appId: "1:1055756821375:web:5d07d2d9fd80dbe9"
};
// Async because we are calling an API, 
//and we pass user auth and any other data for user as object 
// if object is empty, the user is not auth.
export const createUserProfileDocument = async (userAuth, additionnalData) => {
    // if user authentification doesn't exist (user is not logged in)
    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    // using snapShot, we can see if the user exists or not 
    console.log(snapShot);

    if(!snapShot.exists) {
        // in order to create, retrieve, update or delete : docRef. 
        const { displayName, email } = userAuth;
        const createdAt = new Date(); // date of creation of user
        // creating the snapShot : 
        try {
            await userRef.set({
                displayName, 
                email,
                createdAt,
                ...additionnalData
            })
        } catch (error) {
            console.log('Error while creating user.', error.message);
        }
    }
    return userRef;
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

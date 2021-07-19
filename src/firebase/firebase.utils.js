import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAhPLjQH4G8ZhS35eubCpF_Zd6vJpeO3F4",
    authDomain: "onlyn-app.firebaseapp.com",
    projectId: "onlyn-app",
    storageBucket: "onlyn-app.appspot.com",
    messagingSenderId: "1012761862668",
    appId: "1:1012761862668:web:ec7a6e0b60ad1e260f4429"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();    
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


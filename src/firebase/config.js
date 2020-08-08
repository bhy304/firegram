import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBo1v01quu31cT5YC9pEqhmTxO4OAZfa8",
    authDomain: "firegram-eddec.firebaseapp.com",
    databaseURL: "https://firegram-eddec.firebaseio.com",
    projectId: "firegram-eddec",
    storageBucket: "firegram-eddec.appspot.com",
    messagingSenderId: "663608094916",
    appId: "1:663608094916:web:0a2631cd19105fb9819991",
    measurementId: "G-Z4YL81WJQE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const projectStorage = firebase.storage();
export const projectFirestore = firebase.firestore();
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
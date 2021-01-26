import firebase from 'firebase';
import 'firebase/auth';
require('firebase/firestore');

const firebaseConfig = {
  apiKey: 'AIzaSyBTm-mZAolVZgRs5jTbSC8BDSFxvAAJRJw',
  authDomain: 'instagram-app-16040.firebaseapp.com',
  projectId: 'instagram-app-16040',
  storageBucket: 'instagram-app-16040.appspot.com',
  messagingSenderId: '849620707738',
  appId: '1:849620707738:web:74a23dc01500e76e503223'
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
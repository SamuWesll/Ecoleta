import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBKWTTJFN8pOJ4sRoXX2V1ZNhyMgszJa_U",
    authDomain: "pi-univesp-eng-computacao.firebaseapp.com",
    databaseURL: "https://pi-univesp-eng-computacao.firebaseio.com",
    projectId: "pi-univesp-eng-computacao",
    storageBucket: "pi-univesp-eng-computacao.appspot.com",
    messagingSenderId: "541734986579",
    appId: "1:541734986579:web:7f72f613df0f2da32377a6",
    measurementId: "G-X4TBJKPCZ6",
}

firebase.initializeApp(firebaseConfig);

const dbh = firebase.firestore();

export default firebase;
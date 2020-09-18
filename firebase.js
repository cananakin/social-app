import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAjGxpnNOYdO2P8cMdiE1rcv24wgxzguQA",
    authDomain: "social-app-17003.firebaseapp.com",
    databaseURL: "https://social-app-17003.firebaseio.com",
    projectId: "social-app-17003",
    storageBucket: "social-app-17003.appspot.com",
    messagingSenderId: "886156249215",
    appId: "1:886156249215:web:e930e4ea9061138056d74a",
    measurementId: "G-B8VFT8C2MR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
firebase.analytics();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
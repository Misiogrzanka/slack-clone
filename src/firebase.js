import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBVXg4_rGP8rXlOOdcYEDcUxHLP97SOW-0",
    authDomain: "slack-clone-17da2.firebaseapp.com",
    projectId: "slack-clone-17da2",
    storageBucket: "slack-clone-17da2.appspot.com",
    messagingSenderId: "483051351216",
    appId: "1:483051351216:web:ee440f827c7aa0d85a5f75"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth, provider};
export default db;

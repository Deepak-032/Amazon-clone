import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyApE5uVghj4eBEJ9PRVYS_43Htkx0696Jw",
    authDomain: "clone-f211d.firebaseapp.com",
    projectId: "clone-f211d",
    storageBucket: "clone-f211d.appspot.com",
    messagingSenderId: "350676020332",
    appId: "1:350676020332:web:1ca233882074272c823c49",
    measurementId: "G-XS9RPC6BX3"
})


// const db = firebaseApp.firestore()
const auth = firebase.auth()   //for loging in and loging out

export { auth }
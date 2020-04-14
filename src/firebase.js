import firebase from 'firebase/app'
import 'firebase/firestore' 
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyB-03TXY87xyNxeLX_6I-wkMYxvyMnIxZ4",
    authDomain: "pizza-planet-c9ea2.firebaseapp.com",
    databaseURL: "https://pizza-planet-c9ea2.firebaseio.com",
    projectId: "pizza-planet-c9ea2",
    storageBucket: "pizza-planet-c9ea2.appspot.com",
    messagingSenderId: "419093905564",
    appId: "1:419093905564:web:aeb13052f57173c391ad59"
}

firebase.initializeApp(config)

const db = firebase.firestore()
export const firebaseAuth = firebase.auth()
export const dbMenuRef = db.collection('menu')
import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyCpIOt8czmz0_YUwuxld1WXJIkI5awUYus",
    authDomain: "rendez-vous-react.firebaseapp.com",
    projectId: "rendez-vous-react",
    storageBucket: "rendez-vous-react.appspot.com",
    messagingSenderId: "481241161430",
    appId: "1:481241161430:web:dff22660dcc4262f09f377",
    measurementId: "G-WG6109X2M3"
})

export const auth = app.auth()
export default app
import firebase from 'firebase/app'
import 'firebase/database'
// import 'firebase/analytics'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCdFCvUSt5kUkwX33tq2v4Co_sGkYkZdeY",
  authDomain: "alex-angulo-me.firebaseapp.com",
  projectId: "alex-angulo-me",
  storageBucket: "alex-angulo-me.appspot.com",
  messagingSenderId: "529884182307",
  appId: "1:529884182307:web:9529eee490f430bc033e96",
  measurementId: "G-WDY3LY8FL2"
}

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig)
// const analytics = fb.analytics()

export const db = fb.database()
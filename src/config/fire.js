import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase-firestore'

 const config = {
    apiKey: "AIzaSyAcqHLK4oYdRVUeptm1wzaLKzmB1z2_dfk",
    authDomain: "personal-organizer-c42b3.firebaseapp.com",
    databaseURL: "https://personal-organizer-c42b3.firebaseio.com",
    projectId: "personal-organizer-c42b3",
    storageBucket: "personal-organizer-c42b3.appspot.com",
    messagingSenderId: "232776630147",
    appId: "1:232776630147:web:5bc743d3965302b3be40b6"
  };


  // Initialize Firebase
  const fire = firebase.initializeApp(config);

 export default fire;
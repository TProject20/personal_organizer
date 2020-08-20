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
  
  class Firebase {
    constructor() {
      firebase.initializeApp(config)
      this.auth = firebase.auth()
      this.db = firebase.firestore()
    }
  
    login(email, password) {
      return this.auth.signInWithEmailAndPassword(email, password)
    }
  
    logout() {
      return this.auth.signOut()
    }
  
    async register(name, email, password) {
      await this.auth.createUserWithEmailAndPassword(email, password)
      return this.auth.currentUser.updateProfile({
        displayName: name
      })
    }
  
    addQuote(quote) {
      if(!this.auth.currentUser) {
        return alert('Not authorized')
      }
  
      return this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).set({
        quote
      })
    }
  
    isInitialized() {
      return new Promise(resolve => {
        this.auth.onAuthStateChanged(resolve)
      })
    }
  
    getCurrentUsername() {
      return this.auth.currentUser && this.auth.currentUser.displayName
    }
  
    async getCurrentUserQuote() {
      const quote = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
      return quote.get('quote')
    }
  }
  
  export default new Firebase()


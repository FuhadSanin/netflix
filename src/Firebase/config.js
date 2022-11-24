import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZaP-ILmgvhN6swk3IFvBbdNIyozAELLQ",
  authDomain: "netflix-clone-7e0d5.firebaseapp.com",
  projectId: "netflix-clone-7e0d5",
  storageBucket: "netflix-clone-7e0d5.appspot.com",
  messagingSenderId: "342824322689",
  appId: "1:342824322689:web:62117980b80ab4eba22f80",
  measurementId: "G-WFN6CNV9JY"
};

export default firebase.initializeApp(firebaseConfig)

import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBfvpt05b-jmPFJh3Obf3SufUVBiPZ4X4E",
  authDomain: "linkedin-yt-clone.firebaseapp.com",
  projectId: "linkedin-yt-clone",
  storageBucket: "linkedin-yt-clone.appspot.com",
  messagingSenderId: "801055288083",
  appId: "1:801055288083:web:3d1d3176bf9db85b31c8e6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};
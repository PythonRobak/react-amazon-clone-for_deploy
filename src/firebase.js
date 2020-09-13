import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC5MNJK-6Q6py_pGeZ_zU9yCnbTPbuup3w",
  authDomain: "clone-1337.firebaseapp.com",
  databaseURL: "https://clone-1337.firebaseio.com",
  projectId: "clone-1337",
  storageBucket: "clone-1337.appspot.com",
  messagingSenderId: "647101622601",
  appId: "1:647101622601:web:dacdc352a671a3c1e35298",
  measurementId: "G-PZXPJQCX22",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

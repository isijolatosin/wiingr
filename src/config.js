import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyC0brb06pJ3k4jT1lnAKBJJ_BWxe3Xw4Ow",
  authDomain: "your-fusion.firebaseapp.com",
  databaseURL: "https://your-fusion-default-rtdb.firebaseio.com",
  projectId: "your-fusion",
  storageBucket: "your-fusion.appspot.com",
  messagingSenderId: "929719748628",
  appId: "1:929719748628:web:25a73fe1e56ce1efb5bf01",
  measurementId: "G-1D57QN3VDF",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const database = firebase.firestore();

export { auth, database, firebase as default };

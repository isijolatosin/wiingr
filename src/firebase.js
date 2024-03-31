import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyC0brb06pJ3k4jT1lnAKBJJ_BWxe3Xw4Ow",
	authDomain: "your-fusion.firebaseapp.com",
	databaseURL: "https://your-fusion-default-rtdb.firebaseio.com",
	projectId: "your-fusion",
	storageBucket: "your-fusion.appspot.com",
	messagingSenderId: "929719748628",
	appId: "1:929719748628:web:25a73fe1e56ce1efb5bf01",
	measurementId: "G-1D57QN3VDF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const auth = getAuth(app);

export { database, auth };

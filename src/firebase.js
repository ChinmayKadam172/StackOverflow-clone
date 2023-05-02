import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getFirestore } from "firebase/firestore";

const app = firebase.initializeApp({
	apiKey: "AIzaSyBpPhLrcQf41mywiAUNjH79639W6ZG3eGs",
	authDomain: "stackoverflow-clone-e8f34.firebaseapp.com",
	projectId: "stackoverflow-clone-e8f34",
	storageBucket: "stackoverflow-clone-e8f34.appspot.com",
	messagingSenderId: "546505487993",
	appId: "1:546505487993:web:90c18f8ba232e5341346a8",
});

export const auth = app.auth();

export const db = getFirestore(app);
export default app;

import React, { useContext, useEffect, useState } from "react";
import { auth } from "./firebase";
const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState("");
	const [loading, setLoading] = useState(false);

	function signUp(username, passWord) {
		return auth.createUserWithEmailAndPassword(username, passWord);
	}
	function login(username, password) {
		return auth.signInWithEmailAndPassword(username, password);
	}
	function logout() {
		return auth.signOut();
	}
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	const value = {
		currentUser,
		login,
		signUp,
		logout,
	};
	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}

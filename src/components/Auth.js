import { useRef } from "react";
import { useAuth } from "../AuthContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Box, Input } from "@chakra-ui/react";

export default function Auth() {
	const userName = useRef();
	const passWord = useRef();
	const passWordCon = useRef();
	const { signUp } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const userCollectionRef = collection(db, "users");
	const history = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();
		if (passWord.current.value !== passWordCon.current.value) {
			return setError("Passwords do not match");
		}
		try {
			var today = new Date();

			var date =
				today.getFullYear() +
				"-" +
				(today.getMonth() + 1) +
				"-" +
				today.getDate();
			var time =
				today.getHours() +
				":" +
				today.getMinutes() +
				":" +
				today.getSeconds();
			var dateTime = date + " " + time;
			setError("");
			setLoading(true);
			await signUp(userName.current.value, passWord.current.value);
			await addDoc(userCollectionRef, {
				name: userName.current.value.split("@")[0],
				timestamp: dateTime,
			});

			history("/");
		} catch {
			setError("Failed to create an Account");
		}
		setLoading(false);
	}

	return (
		<div className="auth">
			<Box
				maxW="md"
				borderWidth="1px"
				borderRadius="lg"
				overflow="hidden">
				{error && <p>{error}</p>}
				<label htmlFor="userName">
					Email
					<br />
				</label>
				<Input
					type="text"
					name="userName"
					id="userName"
					maxW="sm"
					m="2"
					placeholder="UserName"
					ref={userName}
				/>
				<label htmlFor="passWord">Password</label>
				<Input
					type="password"
					name="passWord"
					maxW="sm"
					id="passWord"
					m="2"
					placeholder="Password"
					ref={passWord}
				/>
				<label htmlFor="passWord">Confirm Password</label>
				<Input
					type="password"
					name="passWordCon"
					id="passWordCon"
					placeholder="Password"
					m="2"
					maxW="sm"
					ref={passWordCon}
				/>
				<button
					className="submitButton"
					id="submit-button"
					name="submit-button"
					onClick={handleSubmit}
					disabled={loading}>
					Sign Up
				</button>
				<br />
				Already have an account? <Link to="/login">Login</Link>
			</Box>
		</div>
	);
}

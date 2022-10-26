import { useRef } from "react";
import { useAuth } from "../AuthContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Box, Input, FormLabel } from "@chakra-ui/react";

export default function LogIn() {
	const userName = useRef();
	const passWord = useRef();
	const { login } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const history = useNavigate();

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setError("");
			setLoading(true);
			await login(userName.current.value, passWord.current.value);
			history("/");
		} catch {
			setError("Failed to login");
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
				{/* <button className="googleLogin">
				<svg
					aria-hidden="true"
					className="native svg-icon iconGoogle"
					width="18"
					height="18"
					viewBox="0 0 18 18">
					<path
						d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"
						fill="#4285F4"></path>
					<path
						d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"
						fill="#34A853"></path>
					<path
						d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z"
						fill="#FBBC05"></path>
					<path
						d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"
						fill="#EA4335"></path>
				</svg>
				Login With Google
			</button> */}
				{error && <p>{error}</p>}
				<div className="authCard">
					<FormLabel htmlFor="userName">
						Email
						<br />
					</FormLabel>
					<Input
						type="text"
						name="userName"
						id="userName"
						placeholder="UserName"
						maxW="sm"
						m="2"
						ref={userName}
					/>
					<FormLabel htmlFor="passWord">Password</FormLabel>
					<Input
						type="password"
						name="password"
						id="passWord"
						placeholder="PassWord"
						maxW="sm"
						m="2"
						ref={passWord}
					/>

					<button
						className="submitButton"
						id="submit-button"
						name="submit-button"
						onClick={handleSubmit}
						disabled={loading}>
						Log In
					</button>
				</div>
				Don't have an account? <Link to="/signup">Sign up</Link>
			</Box>
		</div>
	);
}

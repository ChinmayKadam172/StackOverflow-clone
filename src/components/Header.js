import React from "react";
import { useState } from "react";
import img from "../images/stack-overflow.webp";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import { Box, Input, FormLabel, Button } from "@chakra-ui/react";

export default function Header() {
	// const [isLogin, setIsLogin] = useState(true);
	const { currentUser, logout } = useAuth();
	const [error, setError] = useState("");
	const history = useNavigate();
	async function handleLogOut() {
		setError("");
		try {
			await logout();
			history("/login");
		} catch {
			setError("Failed to log out");
		}
	}

	return (
		<>
			<div className="header">
				<div className="logo">
					<img src={img} alt="logo" />
				</div>
				<p>Products</p>
				<Input maxW="lg" type="text" placeholder="🔍 Search" />
				<div className="user">
					{currentUser ? (
						<>
							<FormLabel>Welcome {currentUser.email} !</FormLabel>
							<button
								className="headerButton"
								onClick={handleLogOut}>
								Log Out
							</button>
						</>
					) : (
						<Button className="headerButton" onClick={handleLogOut}>
							Log In
						</Button>
					)}
				</div>
				{error && console.log(error)}
			</div>
		</>
	);
}

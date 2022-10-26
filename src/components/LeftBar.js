import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";

export default function LeftBar() {
	return (
		<>
			<div className="topics">
				<Link to="/">Home</Link>
				<Link to="/tags">Tags</Link>
				<Link to="/users">User</Link>
			</div>
		</>
	);
}

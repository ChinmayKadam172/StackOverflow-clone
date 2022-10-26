import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import { Input, FormLabel } from "@chakra-ui/react";

export default function Users() {
	const [users, setUsers] = useState([]);
	const userCollectionRef = collection(db, "users");
	useEffect(() => {
		const getUser = async () => {
			const data = await getDocs(userCollectionRef);
			setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};
		getUser();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	// const users =
	return (
		<>
			<div className="usersCard">
				<h2>Users</h2>
				<Input type="text" placeholder="🔍 username" />
				<div className="userList"></div>
				{users.map((user) => {
					return (
						<div
							styles={{
								display: "flex",
								"flex-direction": "column",
								padding: "5px",
							}}
							key={user.name}>
							<FormLabel>{user.name}</FormLabel>
							<p>Created on {user.timestamp}</p>
						</div>
					);
				})}
			</div>
		</>
	);
}

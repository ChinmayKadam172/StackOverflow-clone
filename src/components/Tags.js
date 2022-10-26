import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";
import { Input, FormLabel, Tag } from "@chakra-ui/react";

export default function Tags() {
	const [questions, setQuestions] = useState([]);
	const userCollectionRef = collection(db, "questions");
	useEffect(() => {
		const getUser = async () => {
			const data = await getDocs(userCollectionRef);
			setQuestions(
				data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
			);
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
				{questions.map((user) => {
					return (
						<div
							styles={{
								display: "flex",
								"flex-direction": "column",
								padding: "5px",
							}}
							key={user.name}>
							<Tag m="3">{user.tags}</Tag>
						</div>
					);
				})}
			</div>
		</>
	);
}

import { React, useState, useEffect } from "react";
import { useParams } from "react-router";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
import { Box, Input, FormLabel } from "@chakra-ui/react";

export default function ShowQuestion(props) {
	const { title } = useParams();
	// var [question, setQuestion] = useState([]);
	// var [myQuestion, setMyQuestion] = useState([]);
	// const userCollectionRef = collection(db, "questions");
	// useEffect(() => {
	// 	const getUser = async () => {
	// 		const data = await getDocs(userCollectionRef);
	// 		setQuestion(
	// 			data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
	// 		);
	// 	};
	// 	getUser();

	// 	setMyQuestion(question.find((car) => car.title === { title }));
	// 	console.log(myQuestion);
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, []);

	return (
		<div className="questionWithAnswer">
			<Box
				maxW="lg"
				borderWidth="1px"
				borderRadius="lg"
				overflow="hidden">
				<FormLabel m="2">{title}</FormLabel>
				<Input placeholder="Type answer" />
			</Box>
		</div>
	);
}

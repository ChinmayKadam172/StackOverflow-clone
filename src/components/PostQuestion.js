import React from "react";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router";
import { Box, Input, FormLabel, Button } from "@chakra-ui/react";

export default function PostQuestion() {
	const [newQuestionTitle, setNewQuestionTitle] = useState("");
	const [newQuestionBody, setNewQuestionBody] = useState("");
	const [newQuestionTags, setNewQuestionTags] = useState([]);
	const [loading, setLoading] = useState(false);
	const userCollectionRef = collection(db, "questions");
	const history = useNavigate();
	const createQuestion = async () => {
		setLoading(false);
		await addDoc(userCollectionRef, {
			title: newQuestionTitle,
			body: newQuestionBody,
			tags: newQuestionTags,
		});
		setLoading(true);
		history("/");
	};

	return (
		<div className="questionPost">
			<Box
				maxW="md"
				borderWidth="1px"
				borderRadius="lg"
				overflow="hidden">
				<FormLabel m="2">Ask a Public Question</FormLabel>
				<Input
					maxW="sm"
					type="text"
					placeholder="Type in the question"
					required
					m="2"
					onChange={(event) =>
						setNewQuestionTitle(event.target.value)
					}
				/>
				<Input
					maxW="sm"
					H="md"
					type="text"
					placeholder="Type in the body"
					required
					m="2"
					onChange={(event) => setNewQuestionBody(event.target.value)}
				/>
				<Input
					maxW="sm"
					m="2"
					type="text"
					placeholder="Type in the Tags"
					required
					onChange={(event) => setNewQuestionTags(event.target.value)}
				/>
				<Button m="2" onClick={createQuestion} disabled={loading}>
					Review your question
				</Button>
			</Box>
		</div>
	);
}

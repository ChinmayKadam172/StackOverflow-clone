import React, { useEffect, useState } from "react";
import Question from "./question";
// import { useState } from "react";
import PostQuestion from "./PostQuestion";
import { Link } from "react-router-dom";

import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";


export default function MainDiv() {
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
	const questionsMapped = questions.map((item) => (
		<Question item={item} key={item.id} />
	));

	return (
		<>
			<div className="mainDiv">
				<div className="topMainBar">
					<p>Top Questions</p>
					<button>
						<Link
							className="askquestionbtn"
							to="/postquestion"
							element={<PostQuestion />}>
							Ask Question
						</Link>
					</button>
				</div>
				<div className="questionDiv"></div>
				{questionsMapped}
			</div>
		</>
	);
}

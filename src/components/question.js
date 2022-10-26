import React, { useEffect, useState } from "react";
import { Tag } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Question(props) {
	return (
		<div className="questionBody">
			<div className="statQuestion">
				<p>{props.item.votes} votes</p>
				<p>{props.item.answers} answers</p>
				<p>{props.item.views} views</p>
			</div>
			<div className="bodyQuestion">
				<Link to={"/question/" + props.item.title}>
					{props.item.title}
				</Link>
				<Tag>{props.item.tags}</Tag>

				<p className="user">{props.item.user}</p>
			</div>
		</div>
	);
}

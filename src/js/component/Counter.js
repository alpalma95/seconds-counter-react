import React from "react";
const Counter = ({ seconds }) => {
	const arr = [...seconds.toString()];
	const newArr = arr.map((x) => <span key={Math.random() * 1000}>{x}</span>);

	const spansArray = [];

	for (let i = arr.length; i < 6; i++) {
		spansArray.push(<span key={i}>0</span>);
	}

	return (
		<div className="counter">
			<div className="counter">{spansArray}</div>
			<div className="counter">{newArr}</div>
		</div>
	);
};
export default Counter;

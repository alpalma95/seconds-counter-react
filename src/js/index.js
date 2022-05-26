//import react into the bundle
import { doc } from "prettier";
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Counter from "./component/Counter";

//render your react application

let seconds = 0;
let component;

const increaseSeconds = () => seconds++;

const renderingHandler = () => {
	increaseSeconds();
	component = (
		<div className="app">
			<span>
				<i class="fa-regular fa-clock"></i>
			</span>

			<Counter seconds={seconds} />
		</div>
	);
	ReactDOM.render(component, document.querySelector("#app"));
};
let startInterval = setInterval(renderingHandler, 1000);

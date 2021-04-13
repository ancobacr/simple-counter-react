//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "../styles/index.scss";

//import your own components
import { SecondsCounter } from "./component/counter";

//render your react application
let counter = 0;
setInterval(() => {
	const one = Math.floor(counter / 1) % 10;
	const two = Math.floor(counter / 10) % 10;
	const three = Math.floor(counter / 100) % 10;
	const four = Math.floor(counter / 1000) % 10;
	const five = Math.floor(counter / 10000) % 10;
	const six = Math.floor(counter / 100000) % 10;

	counter++;
	ReactDOM.render(
		<SecondsCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
			digitFive={five}
			digitSix={six}
		/>,
		document.querySelector("#app")
	);
}, 1000);

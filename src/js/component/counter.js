import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

//create your first component
export function SecondsCounter(props) {
	return (
		<Fragment className="container">
			<div className="box">
				<div>
					<FontAwesomeIcon icon={faClock} />
				</div>
				<div className="six">{props.digitSix}</div>
				<div className="five">{props.digitFive}</div>
				<div className="four">{props.digitFour}</div>
				<div className="three">{props.digitThree}</div>
				<div className="two">{props.digitTwo}</div>
				<div className="one">{props.digitOne}</div>
			</div>
		</Fragment>
	);
}

SecondsCounter.propTypes = {
	digitOne: PropTypes.number,
	digitTwo: PropTypes.number,
	digitThree: PropTypes.number,
	digitFour: PropTypes.number,
	digitFive: PropTypes.number,
	digitSix: PropTypes.number
};

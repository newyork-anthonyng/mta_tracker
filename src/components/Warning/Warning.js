import React from 'react';
import './style.css';

const Warning = (props) => {
	const trainList = props.delays.map((train) => (
			<li key={train}>
				{train}
			</li>
	));

	return (
		<div className="warning">
			<h1>Warning</h1>
			<ul>
				{trainList}
			</ul>
		</div>
	);
}

Warning.propTypes = {
	delays: React.PropTypes.array
};

Warning.defaultProps = {
	delays: []
};

export default Warning;

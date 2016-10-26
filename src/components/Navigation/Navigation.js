import React from 'react';
import { Link } from 'react-router';

const Navigation = () => {
	return (
		<div>
			<Link to="/">All MTA</Link>
			<Link to="/favorites">Favorite MTA</Link>
		</div>
	);
};

export default Navigation;

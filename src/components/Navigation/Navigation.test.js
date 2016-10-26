import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';
import { Link } from 'react-router';

it('renders without crashing', () => {
	shallow(<Navigation />);
});

it('renders two links', () => {
	const wrapper = shallow(<Navigation />);
	const firstLink = <Link to="/">All MTA</Link>;
	const secondLink = <Link to="/favorites">Favorite MTA</Link>;

	expect(wrapper.contains(firstLink)).toEqual(true);
	expect(wrapper.contains(secondLink)).toEqual(true);
});

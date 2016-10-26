import React from 'react';
import { shallow } from 'enzyme';
import Warning from './Warning';

it('renders without crashing', () => {
	shallow(<Warning />);
});

it('renders warning message', () => {
	const wrapper = shallow(<Warning />);
	const message = <h1>Warning</h1>;

	expect(wrapper.contains(message)).toEqual(true);
});

it('renders a list of delayed trains', () => {
	const delays = ['A', '6', 'N'];
	const wrapper = shallow(<Warning delays={delays} />);
	const list = (
		<ul>
			<li>A</li>
			<li>6</li>
			<li>N</li>
		</ul>
	);

	expect(wrapper.contains(list)).toEqual(true);
});

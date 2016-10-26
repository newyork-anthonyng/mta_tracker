import React from 'react';
import { shallow } from 'enzyme';
import TrackList from './TrackList';

it('renders without crashing', () => {
	shallow(<TrackList />);
});

it('renders a title', () => {
	const wrapper = shallow(<TrackList title='Hello' />);
	const message = <h1>Hello</h1>;

	expect(wrapper.contains(message)).toEqual(true);
});

it('renders a list of lines and their location', () => {
	const tracks = [
		{line: 'A', location: '14th St'},
		{line: 'N', location: 'Fort Hamilton'}
	];
	const wrapper = shallow(<TrackList tracks={tracks} />);

	expect(wrapper.find('li').length).toEqual(2);
	expect(wrapper.text()).toEqual('A @ 14th StN @ Fort Hamilton');
});

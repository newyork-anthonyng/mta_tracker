import React from 'react';
import { shallow } from 'enzyme';
import AllTrackList from './AllTrackList';
import TrackList from '../TrackList/TrackList';

it('renders without crashing', () => {
	shallow(<AllTrackList />);
});

it('renders a Track List with appropriate header', () => {
	const wrapper = shallow(<AllTrackList />);
	const list = <TrackList title="All Tracks" />;

	expect(wrapper.contains(list)).toEqual(true);
});

it('renders a Track List with appropriate tracks', () => {
	const tracks = [
		{line: 'A', location: '14th St'},
		{line: 'N', location: 'Fort Hamilton'}
	];
	const wrapper = shallow(<AllTrackList tracks={tracks} />);
	const list = <TrackList title="All Tracks" tracks={tracks} />;

	expect(wrapper.contains(list)).toEqual(true);
});

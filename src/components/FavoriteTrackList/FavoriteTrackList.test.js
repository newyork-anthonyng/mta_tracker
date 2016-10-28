import React from 'react';
import { shallow } from 'enzyme';
import FavoriteTrackList from './FavoriteTrackList';
import TrackList from '../TrackList/TrackList';
import FavoriteTrackEntry from '../FavoriteTrackEntry/FavoriteTrackEntry';

it('renders without crashing', () => {
	shallow(<FavoriteTrackList />);
});

it('renders a Track List with appropriate header', () => {
	const wrapper = shallow(<FavoriteTrackList />);
	const list = <TrackList title="Favorite Tracks" />;

	expect(wrapper.contains(list)).toEqual(true);
});

it('renders an Entry field', () => {
	const wrapper = shallow(<FavoriteTrackList />);
	const entry = <FavoriteTrackEntry />;

	expect(wrapper.containsMatchingElement(entry)).toEqual(true);
});

it('renders a Track List with appropriate tracks', () => {
	const tracks = [
		{line: 'A', location: '14th St'},
		{line: 'N', location: 'Fort Hamilton'}
	];
	const wrapper = shallow(<FavoriteTrackList tracks={tracks} />);
	const list = <TrackList title="Favorite Tracks" tracks={tracks} />;

	expect(wrapper.contains(list)).toEqual(true);
});

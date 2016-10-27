import React from 'react';
import TrackList from '../TrackList/TrackList';

const AllTrackList = ({ tracks }) => (
	<TrackList
		title="All Tracks"
		tracks={tracks}
	/>
);

AllTrackList.propTypes = {
	tracks: React.PropTypes.array
};

AllTrackList.defaultProps = {
	tracks: []
};

export default AllTrackList;

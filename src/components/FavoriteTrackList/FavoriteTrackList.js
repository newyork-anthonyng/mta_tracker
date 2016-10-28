import React from 'react';
import FavoriteTrackEntry from '../FavoriteTrackEntry/FavoriteTrackEntry';
import TrackList from '../TrackList/TrackList';

const FavoriteTrackList = ({ tracks, onSubmit }) => {
	return (
		<div>
			<FavoriteTrackEntry onSubmit={onSubmit} />
			<TrackList
				title="Favorite Tracks"
				tracks={tracks}
			/>
		</div>
	);
};

FavoriteTrackList.propTypes = {
	tracks: React.PropTypes.array,
	onSubmit: React.PropTypes.func
};

FavoriteTrackList.defaultProps = {
	tracks: []
};

export default FavoriteTrackList;

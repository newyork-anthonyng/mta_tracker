import React from 'react';
import FavoriteTrackEntry from '../FavoriteTrackEntry/FavoriteTrackEntry';
import TrackList from '../TrackList/TrackList';

const FavoriteTrackList = ({ tracks }) => {
	return (
		<div>
			<FavoriteTrackEntry />
			<TrackList
				title="Favorite Tracks"
				tracks={tracks}
			/>
		</div>
	);
};

FavoriteTrackList.propTypes = {
	tracks: React.PropTypes.array
};

FavoriteTrackList.defaultProps = {
	tracks: []
};

export default FavoriteTrackList;

import React from 'react';

const TrackList = ({ title, tracks }) => {
	const trackList = tracks.map((track, i) => (
		<li key={i}>{track.line} @ {track.location}</li>
	));

	return (
		<div>
			<h1>{title}</h1>
			<ul>
				{trackList}
			</ul>
		</div>
	);
};

TrackList.propTypes = {
	title: React.PropTypes.string,
	tracks: React.PropTypes.array
};

TrackList.defaultProps = {
	title: '',
	tracks: []
};

export default TrackList;

import React from 'react';
import FavoriteTrackList from '../../components/FavoriteTrackList/FavoriteTrackList';
import StorageWrapper from '../../utility/StorageWrapper';

class FavoriteTrackListContainer extends React.Component {
	constructor(props) {
		super(props);

		this.addFavoriteTrack = this.addFavoriteTrack.bind(this);
		this.state = {
			favoriteTracks: [
				{ line: 'D', location: 'Union Square' },
				{ line: '1', location: 'Times Square' },
				{ line: '2', location: '86th St' }
			]
		};
	}

	componentDidMount() {
		StorageWrapper.initialize();
	}

	addFavoriteTrack(track) {
		StorageWrapper.add(track, (data) => {
			alert('New track successfully added: ' + track);
			const newTracks = this.state.favoriteTracks.slice();
			newTracks.push(
				{ line: data.name, location: 'My house' }
			);

			this.setState({ favoriteTracks: newTracks });
		});
	}

	render() {
		return (
			<FavoriteTrackList
				tracks={this.state.favoriteTracks}
				onSubmit={this.addFavoriteTrack}
			/>
		);
	}
};

export default FavoriteTrackListContainer;

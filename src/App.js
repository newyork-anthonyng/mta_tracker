import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Warning from './components/Warning/Warning';
import Navigation from './components/Navigation/Navigation';
import FavoriteTrackList from './components/FavoriteTrackList/FavoriteTrackList';
import AllTrackList from './components/AllTrackList/AllTrackList';
import './App.css';

const HeaderContainer = (props) => {
	const delays = ['R', '6', 'A'];

	return (
		<div>
			<Warning
				delays={delays}
			/>
			<Navigation />
			{props.children}
		</div>
	);
};

const AllTrackListContainer = () => {
	const allTracks = [
		{ line: 'A', location: 'Union Square' },
		{ line: 'N', location: 'Times Square' },
		{ line: '6', location: 'Fort Hamilton' }
	];
	return <AllTrackList tracks={allTracks} />;
};

const FavoriteTrackListContainer = () => {
	const favoriteTracks = [
		{ line: 'D', location: 'Union Square' },
		{ line: '1', location: 'Times Square' },
		{ line: '2', location: '96th St' },
		{ line: '2', location: 'Coney Island' },
		{ line: '2', location: '86th St' }
	];
	return <FavoriteTrackList tracks={favoriteTracks} />;
};

class App extends React.Component {
	render() {
		return (
			<div>
				<Router history={hashHistory}>
					<Route path="/" component={HeaderContainer}>
						<IndexRoute component={AllTrackListContainer} />
						<Route path="/favorites" component={FavoriteTrackListContainer} />
						<Route path="*" component={AllTrackListContainer} />
					</Route>
				</Router>
			</div>
		);
	}
}

export default App;

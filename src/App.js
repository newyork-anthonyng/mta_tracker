import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Warning from './components/Warning/Warning';
import Navigation from './components/Navigation/Navigation';
import TrackStatusList from './components/TrackList/TrackList';
import './App.css';

const delays = ['R', '6', 'A'];

const Container = (props) => (
	<div>
		<Warning
			delays={delays}
		/>
		<Navigation />
		{props.children}
	</div>
);

const allTracks = [
	{ line: 'A', location: 'Union Square' },
	{ line: 'N', location: 'Times Square' },
	{ line: '6', location: 'Fort Hamilton' }
];
const AllTracks = () => (
	<TrackStatusList
		title="All Tracks"
		tracks={allTracks}
	/>
);

const favoriteTracks = [
	{ line: 'D', location: 'Union Square' },
	{ line: '1', location: 'Times Square' },
	{ line: '2', location: '96th St' },
	{ line: '2', location: 'Coney Island' },
	{ line: '2', location: '86th St' }
];
const FavoriteTracks = () => (
	<TrackStatusList
		title="Favorite Tracks"
		tracks={favoriteTracks}
	/>
);

class App extends React.Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={Container}>
					<IndexRoute component={AllTracks} />
					<Route path="/favorites" component={FavoriteTracks} />
					<Route path="*" component={AllTracks} />
				</Route>
			</Router>
		);
	}
}

export default App;

import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Warning from './components/Warning/Warning';
import Navigation from './components/Navigation/Navigation';
import FavoriteTrackListContainer from './containers/FavoriteTrackListContainer/FavoriteTrackListContainer';
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

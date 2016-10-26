import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Warning from './components/Warning/Warning';
import Navigation from './components/Navigation/Navigation';
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

const Home = () => <h1>Home</h1>;

const FavoriteContainer = () => (
	<h1>Favorites</h1>
);

class App extends React.Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={Container}>
					<IndexRoute component={Home} />
					<Route path="/favorites" component={FavoriteContainer} />
					<Route path="*" component={Home} />
				</Route>
			</Router>
		);
	}
}

export default App;

import React, { Component } from 'react';
import Warning from './components/Warning/Warning';
import './App.css';

class App extends Component {
	render() {
		const delays = ['R', '6', 'A'];

		return (
			<div className="App">
				<Warning
					delays={delays}
				/>
			</div>
		);
	}
}

export default App;

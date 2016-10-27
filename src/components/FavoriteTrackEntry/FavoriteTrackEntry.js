import React from 'react';

class FavoriteTrackEntry extends React.Component {
	constructor(props) {
		super(props);

		this.state = { value: '' };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit() {
		this.props.onSubmit(this.state.value);
	}

	render() {
		return (
			<div>
				<input
					type="text"
					placeholder="Enter favorite track"
					onChange={this.handleChange}
					value={this.state.value} />
				<button onClick={this.handleSubmit}>
					Add
				</button>
			</div>
		);
	}
};

FavoriteTrackEntry.propTypes = {
	onSubmit: React.PropTypes.func
};

export default FavoriteTrackEntry;

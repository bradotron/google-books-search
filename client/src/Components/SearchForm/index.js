import React, { Component } from 'react';

class SearchForm extends Component {
	state = {
		search: '',
	};

	onInputChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	onFormSubmit = e => {
		e.preventDefault();

		if (this.validateForm()) {
			//console.log('good form');
			this.props.sendSearchUp(this.state.search);
		} else {
			//console.log('bad form');
			alert('Please input some terms (authors, titles, subjects) to search for.');
		}
	};

	validateForm = () => {
		return this.state.search !== '';
	};

	render() {
		return (
			<div>
				<h1>Google Book Search</h1>
				<form>
					<label>
						Search:
						<input type="text" name="search" value={this.state.search} onChange={this.onInputChange} />
					</label>
					<button onClick={this.onFormSubmit} type="submit">
						Search
					</button>
				</form>
			</div>
		);
	}
}

export default SearchForm;

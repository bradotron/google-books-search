import React, { Component } from 'react';
import SearchForm from '../Components/SearchForm';

class Search extends Component {
	state = {
    results: [],
    loading: false,
	};

	getSearch = search => {
    this.setState({
      loading: true,
    });
		// submit a get request to the google books api for (search)
		let url = `https://www.googleapis.com/books/v1/volumes?q=${search.trim().replace(/ /g, '+')}`;
		//console.log(url);
		fetch(url)
			.then(response => response.json())
			.then(response => {
        console.log(response);
        // the values I need to implement pagination are in the response
        this.setState({
          results: response.items,
          loading: false,
        });
			})
			.catch(error => {
        console.log(error);
        this.setState({
          results: [],
          loading: false,
        });
			});
	};

	render() {
		return (
			<div>
				<h1>This is the Search Page</h1>
				<SearchForm sendSearchUp={this.getSearch} />
			</div>
		);
	}
}

export default Search;

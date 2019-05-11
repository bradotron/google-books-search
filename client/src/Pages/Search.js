import React, { Component } from 'react';
import SearchForm from '../Components/SearchForm';
import Book from '../Components/Book';
import myBooksApi from '../utils/myBooksApi'

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

	handleSaveBook = e => {
    e.preventDefault();
    const id = e.target.getAttribute('id');
    // find the index of the book
    const saveBook = this.state.results.filter(book => book.id === id);

    myBooksApi.postBook(saveBook).then(res => {
      alert(`Book has been saved.`)
    }).catch(err => {
			console.log(err);
		});
	}

	render() {
		return (
			<div>
				<SearchForm sendSearchUp={this.getSearch} />
        {this.state.results.map((book) => {
					return (
						<Book 
            key={book.id}
            id={book.id}
						title={book.volumeInfo.title ? book.volumeInfo.title : "N/A"} 
						authors={book.volumeInfo.authors ? book.volumeInfo.authors : "N/A"}
						description={book.volumeInfo.description ? book.volumeInfo.description : "N/A"}
						thumbnail={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "No Image"}
						smallThumbnail={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : "No Image"}
						infoLink={book.volumeInfo.infoLink ? book.volumeInfo.infoLink : "N/A"}
						handleSaveBook={this.handleSaveBook}
						source="search"
						/>
					)
				})}
			</div>
		);
	}
}

export default Search;

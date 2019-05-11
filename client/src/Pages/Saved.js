import React, { Component } from 'react';
import Book from '../Components/Book';
import myBooksApi from '../utils/myBooksApi';

class Saved extends Component {
	state = {
		results: [],
	};

	componentDidMount() {
		// console.log('saved component loaded');
		this.loadSavedBooks();
	}

	loadSavedBooks() {
		myBooksApi
			.getBooks()
			.then(res => {
				console.log(res);
				this.setState({
					results: res.data,
				});
			})
			.catch(err => {
				console.log(err);
			});
	}

	handleDeleteBook = e => {
    e.preventDefault();
    const id = e.target.getAttribute('id');

    myBooksApi.deleteBook(id).then(res => {
			this.loadSavedBooks();
    }).catch(err => {
			console.log(err);
		});
	}

	render() {
		return (
			<div>
				<div className="jumbotron my-2 p-2">
					<h1>Your Saved Books:</h1>
				</div>
				{this.state.results.map(book => {
					return (
						<Book
							key={book.id}
							id={book.id}
							title={book.volumeInfo.title ? book.volumeInfo.title : 'N/A'}
							authors={book.volumeInfo.authors ? book.volumeInfo.authors : 'N/A'}
							description={book.volumeInfo.description ? book.volumeInfo.description : 'N/A'}
							thumbnail={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'No Image'}
							smallThumbnail={
								book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : 'No Image'
							}
							infoLink={book.volumeInfo.infoLink ? book.volumeInfo.infoLink : 'N/A'}
							handleDeleteBook={this.handleDeleteBook}
							source="saved"
						/>
					);
				})}
			</div>
		);
	}
}

export default Saved;

import React, { Component } from 'react';

import Book from '../Book';

class BooksDisplay extends Component {
	render() {
		return (
			<div>
				<h1>I display some books</h1>
				<Book />
			</div>
		);
	}
}

export default BooksDisplay;

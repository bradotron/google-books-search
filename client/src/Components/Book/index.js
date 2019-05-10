import React from 'react';

function Book(props) {
	return (
		<div>
			{props.thumbnail === 'No Image' ? (
				<p>No Image available for {props.title}</p>
			) : (
				<img src={props.thumbnail} alt={'book cover for ' + props.title} />
			)}
			<p>{props.title}</p>
			<p>Author(s)</p>
			<ul>
				{props.authors.map((author, index) => {
					return <li key={index}>{author}</li>;
				})}
			</ul>
			<p>{props.description}</p>
			<a href={props.infoLink} rel="noopener noreferrer" target="_blank">
				More Info on Google Books
			</a>
			<button id={props.id} onClick={props.handleSaveBook}>Save</button>
		</div>
	);
}

export default Book;

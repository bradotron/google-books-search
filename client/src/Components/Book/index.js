import React from 'react';

function Book(props) {
	return (
		<div className="row p-3 mb-2 bg-light rounded">
			<div className="col-sm-3">
				{props.thumbnail === 'No Image' ? (
					<p>No Image available for {props.title}</p>
				) : (
					<img src={props.thumbnail} alt={'book cover for ' + props.title} />
				)}
			</div>
			<div className="col-sm-9">
				<h4>{props.title}</h4>
				<h5>Author(s)</h5>
				<ul>
					{typeof props.authors === 'object'
						? props.authors.map((author, index) => {
								return <li key={index}>{author}</li>;
						  })
						: 'No Authors Listed'}
				</ul>
				<p>{props.description}</p>
				<div className="row">
					<a className="mr-auto" href={props.infoLink} rel="noopener noreferrer" target="_blank">
						More Info on Google Books
					</a>
					{props.source === 'saved' ? (
						<button className="btn btn-danger" id={props.id} onClick={props.handleDeleteBook}>
							Delete
						</button>
					) : (
						<button className="btn btn-primary" id={props.id} onClick={props.handleSaveBook}>
							Save
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default Book;

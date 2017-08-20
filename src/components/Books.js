import React from 'react';

const Books = props => {
	return (
		<div>
			<h1>List of all books</h1>
			<ul>
			{props.books.map((book, index) => {
				return <li key={index}>{book.title}</li>
			})}
			</ul>
		</div>
	)
}

export default Books;
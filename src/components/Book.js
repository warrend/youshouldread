import React from 'react'

const Book = (props) => {
	return (
		<div>
			<h3>{props.book.title}</h3>
			<p>By {props.book.author}</p>
			<p>{props.book.pages} pages | {props.book.genre} | {props.book.category}</p>
			<p>Review: {props.book.review}</p>
		</div>
	)
}

export default Book
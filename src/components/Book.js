import React from 'react'

const Book = (props) => {
	return (
		<div>
			<h3>{props.book.title} by {props.book.author}</h3>
			<p>{props.book.genre} | {props.book.category} | {props.book.pages} pages</p>
			<p>Review: {props.book.review}</p>
		</div>
	)
}

export default Book
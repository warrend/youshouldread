import React from 'react';
import {selectBook} from '../actions/bookActions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import BookDetails from '../components/BookDetails';

const Books = props => {
	return (
		<div>
			<div className="book-list">
				<h1>List of all books</h1>
				<ul>
				<li className="bold">Fiction</li>
				{props.books.map((book, index) => {
					if (book.genre === 'fiction') {
						return <li onClick={() => props.selectBook(book)} key={index}>{book.title}</li>
					}
				})}
				</ul>

				<ul>
				<li className="bold">Nonfiction</li>
				{props.books.map((book, index) => {
					if (book.genre === 'nonfiction') {
						return <li onClick={() => props.selectBook(book)} key={index}>{book.title}</li>
					}
				})}
				</ul>
			</div>
			<div className="book-details">
				<BookDetails />
			</div>
		</div>
	)
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

export default connect(null, mapDispatchToProps)(Books);
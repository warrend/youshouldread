import React from 'react';
import {selectBook} from '../actions/bookActions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import BookDetails from '../components/BookDetails';

const Books = props => {
	return (
		<div>
			<div className="book-list">
				<h1>All books</h1>
				<ul>
				<li className="bold">Fiction</li>
					{props.books.filter(book => book.genre === 'fiction').map((book, index) => {
						return <li onClick={() => props.selectBook(book)} key={index}>{book.title}</li>
					})}
				</ul>

				<ul>
				<li className="bold">Nonfiction</li>
					{props.books.filter(book => book.genre === 'nonfiction').map((book, index) => {
						return <li onClick={() => props.selectBook(book)} key={index}>{book.title}</li>
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
import React from 'react';
import {selectBook} from '../actions/bookActions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

const Books = props => {
	return (
		<div>
			<h1>List of all books</h1>
			<ul>
			{props.books.map((book, index) => {
				return <li onClick={() => props.selectBook(book)} key={index}>{book.title}</li>
			})}
			</ul>
		</div>
	)
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

export default connect(null, mapDispatchToProps)(Books);
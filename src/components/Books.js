import React, {Component} from 'react'
import {selectBook} from '../actions/bookActions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import BookDetails from '../components/BookDetails';
import BookSingle from '../components/BookSingle'

class Books extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div>
				<div className="book-list">
					<h1>All books</h1>
					<ul>
					<li className="bold">Fiction</li>
						{this.props.books.filter(book => book.genre === 'fiction').map((book, index) => {
							return <li><BookSingle book={book} key={index} /></li>
						})}
					</ul>

					<ul>
					<li className="bold">Nonfiction</li>
						{this.props.books.filter(book => book.genre === 'nonfiction').map((book, index) => {
							return <li><BookSingle book={book} key={index} /></li>
						})}
					</ul>
				</div>
				<div className="book-details">
					<BookDetails />
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    books: state.books
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);
import React, {Component} from 'react'
import {connect} from 'react-redux'
import Book from './Book'

class BookDetails extends Component {
	render() {
		if(!this.props.book) {
			return (<p className="message">Select a book for more details...</p>)
		}
		return (
			<Book book={this.props.book} />
		)
	}
}

const mapStateToProps = (state) => {
  return {
    book: state.selectedBook
  }
}

export default connect(mapStateToProps)(BookDetails)
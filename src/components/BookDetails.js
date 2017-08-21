import React, {Component} from 'react'
import {connect} from 'react-redux'

class BookDetails extends Component {
	render() {
		if(!this.props.book) {
			return (<p className="message">Select a book for more details...</p>)
		}
		return (
			<div>
				<h3>{this.props.book.title}</h3>
				<p>By {this.props.book.author}</p>
				<p>{this.props.book.pages} pages | {this.props.book.genre} | {this.props.book.category}</p>
				<p>Review: {this.props.book.review}</p>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    book: state.selectedBook
  }
}

export default connect(mapStateToProps)(BookDetails)
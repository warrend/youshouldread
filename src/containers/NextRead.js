import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/bookActions'

class NextRead extends Component {
	constructor(props) {
		super(props);

		this.state = {
			book: Object.assign({}, this.props.books[Math.floor(Math.random()*this.props.books.length])
		}
	}

	getNewBook = () => {
		this.setState = {
			book: Object.assign({}, this.props.books[Math.floor(Math.random()*this.props.books.length])
		}
	}

	render() {
		return (
			<div>
				<h2>Your next book...</h2>
				<h3>{this.state.book.title} by {this.state.book.author}</h3>
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

const mapDispatchToProps = dispatch => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default NextRead = connect(mapStateToProps, mapDispatchToProps)(NextRead)

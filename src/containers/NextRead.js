import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/bookActions'
import Book from '../components/Book'
import {RaisedButton} from 'material-ui'

class NextRead extends Component {
	constructor(props) {
		super(props);

		this.state = {
			book: Object.assign({}, this.props.books[Math.floor(Math.random()*this.props.books.length)])
		}
	}

	componentDidMount() {
    this.props.actions.fetchBooks()
  } 

	getNewBook() {
		console.log("Getting new book...")
		this.setState({
			book: Object.assign({}, this.props.books[Math.floor(Math.random()*this.props.books.length)])
		})
	}

	render() {
		const style = {
			marginTop: '25px'
		}

		return (
			<div className="full" style={style}>
				<RaisedButton onClick={() => this.getNewBook()} label="Get Another" />
				<h1>You should read...</h1>
				<Book book={this.state.book} />
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

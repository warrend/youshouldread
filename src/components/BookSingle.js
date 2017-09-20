import React, {Component} from 'react'
import {RaisedButton} from 'material-ui'
import {selectBook, addLike} from '../actions/bookActions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class BookSingle extends Component {

	render() {
		const likesCount = this.props.book.likes + 1
		return (
			<div>
				<p onClick={() => this.props.selectBook(this.props.book)}>{this.props.book.title}</p>
				<RaisedButton className="btn" onClick={() => this.props.addLike(this.props.book.id, likesCount)}>Like</RaisedButton><span> &#9829; {this.props.book.likes}</span>
				<br />
				<br />
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
  return bindActionCreators({selectBook: selectBook, addLike: addLike}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookSingle);
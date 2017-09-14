import React, {Component} from 'react'
import {RaisedButton} from 'material-ui'
import {selectBook} from '../actions/bookActions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class BookSingle extends Component {
	constructor(props) {
		super(props);
		this.state = {likes: 0}
	}

	addLike = () => {
		this.setState({likes: this.state.likes + 1})
	}

	render() {
		return (
			<div>
				<p onClick={() => this.props.selectBook(this.props.book)}>{this.props.book.title}</p>
				<RaisedButton className="btn" onClick={() => this.addLike()}>Like</RaisedButton><span> {this.state.likes}</span>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectBook: selectBook}, dispatch)
}

export default connect(null, mapDispatchToProps)(BookSingle);
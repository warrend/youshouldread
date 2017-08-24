import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/bookActions';

class BookForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '', 
			author: '', 
			pages: '', 
			review: '', 
			genre: '', 
			category: ''
		}
	}

	// submitNewBook = (data) =>{
	// 	return fetch('http://localhost:3000/books', {
	// 			method: 'POST', 
	// 			mode: 'CORS',
	// 			headers: {
	// 				'Content-type': 'application/json'
	// 			},
	// 			body: JSON.stringify(data)
	// 		})
	// }

	handleInputChange = (event) => {
		const name = event.target.name
		const value = event.target.value

		this.setState({
			[name]: value
		})
	}

	// handleInputChangeTitle = (event) => {
 //    this.setState({
 //      title: event.target.value
 //    });
 //  }

 //  handleInputChangeAuthor = (event) => {
 //    this.setState({
 //      author: event.target.value
 //    });
 //  }

 //  handleInputChangePages = (event) => {
 //    this.setState({
 //      pages: event.target.value
 //    });
 //  }

 //  handleInputChangeReview = (event) => {
 //    this.setState({
 //      review: event.target.value
 //    });
 //  }

 //  handleInputChangeGenre = (event) => {
 //    this.setState({
 //      genre: event.target.value
 //    });
 //  }

 //  handleInputChangeCategory = (event) => {
 //    this.setState({
 //      category: event.target.value
 //    });
 //  }

  handleSubmit = (event) => {
  	event.preventDefault()
  	console.log(this.state)
  }

	// submit = (state) => {
	// 	let error = {}
	// 	let isError = false

	// 	if (title.trim() === '') {
	// 		error.title = 'Required'
	// 		isError = true
	// 	}

	// 	if (author.trim() === '') {
	// 		error.author = 'Required'
	// 		isError = true
	// 	}

	// 	if (pages.trim() === '') {
	// 		error.pages = 'Required'
	// 		isError = true
	// 	}

	// 	if (review.trim() === '') {
	// 		error.review = 'Required'
	// 		isError = true
	// 	}

	// 	if (review.length > 750) {
	// 		error.review = 'Review needs to be less than 750 characters.'
	// 	}

	// 	if (genre.trim() === '') {
	// 		error.genre = 'Required'
	// 		isError = true
	// 	}

	// 	if (category.trim() === '') {
	// 		error.category = 'Required'
	// 		isError = true
	// 	}

	// 	if (isError) {
	// 		throw new SubmissionError(error)
	// 	} else {
	// 		this.submitNewBook({title, author, pages, review, genre, category })
	// 			.then(data => console.log(data))
	// 	}
	// }
	render() {
		return(
			<form onSubmit={event => this.handleSubmit(event)}>
				<div>
					<label>Title</label>
					<input name="title" value={this.state.title} onChange={this.handleInputChange} type="text" />
				</div>

				
				<div>
					<label>Author</label>
					<input name="author" value={this.state.author} onChange={this.handleInputChange} type="text" />
				</div>
				

				<div>
					<label>Pages</label>
					<input name="pages" value={this.state.pages} onChange={this.handleInputChange} type="text" />
				</div>
				

				<div>
					<label>Category</label>
					<input name="category" value={this.state.category} onChange={this.handleInputChange} type="text" />
				</div>
				

				<div>
					<label>Review</label>
					<textarea name="review" value={this.state.review} onChange={this.handleInputChange} />
				</div>

				<div>
		      <label>
		        <input
		          name="genre"
		          type="radio"
		          value="fiction"
		          onChange={this.handleInputChange}
		          checked={this.state.genre === 'fiction'}
		        />{' '}
		        Fiction
		      </label>
		      <label>
		        <input
		          name="genre"
		          type="radio"
		          value="nonfiction"
		          checked={this.state.genre === 'nonfiction'}
		          onChange={this.handleInputChange}
		        />{' '}
		        Nonfiction
		      </label>
		    </div>
		    <div className="submit-button">
 					<button type="submit">Add</button>
		 		</div>
			</form>
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

export default BookForm = connect(mapStateToProps, mapDispatchToProps)(BookForm)

// const renderField = ({type, label, input, meta: {touched, error}}) => (
//   <div className="input-row">
//   	<label>{label}</label>
//     <input {...input} type={type}/>
//     {touched && error && 
//      <span className="error">{error}</span>}
//   </div>
// )

// const BookFormFun = ({handleSubmit}) => (
// 	<form onSubmit={() => handleSubmit(submit)}>
// 		<Field name="title" label="Title" component={renderField} type="text" />
// 		<Field name="author" label="Author" component={renderField} type="text" />
// 		<Field name="pages" label="Pages" component={renderField} type="text" />
//     <div>
//       <label>
//         <Field
//           name="genre"
//           component="input"
//           type="radio"
//           value="fiction"
//           checked
//         />{' '}
//         Fiction
//       </label>
//       <label>
//         <Field
//           name="genre"
//           component="input"
//           type="radio"
//           value="nonfiction"
//         />{' '}
//         Nonfiction
//       </label>
//     </div>
// 		<Field name="category" label="Category" component={renderField} type="text" />
// 		<Field name="review" label="Review" component={renderField} type="textarea" />
// 		<div className="submit-button">
// 			<button type="submit">Add</button>
// 		</div>
// 	</form>
// )

// export default BookFormFun


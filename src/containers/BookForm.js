import React from 'react';
import {Field, reduxForm, SubmissionError} from 'redux-form';

async function submitNewBook(data) {
	try {
		let response = await fetch('http://localhost:3000/books', {
			method: 'POST', 
			mode: 'CORS',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(data)
		})
		let responseJson = await response.json()
		return	responseJson
	} catch(error) {
		console.log(error)
	}
}

const submit = ({title='', author='', pages='', review='', genre='', category=''}) => {
	let error = {}
	let isError = false

	if (title.trim() === '') {
		error.title = 'Required'
		isError = true
	}

	if (author.trim() === '') {
		error.author = 'Required'
		isError = true
	}

	if (pages.trim() === '') {
		error.pages = 'Required'
		isError = true
	}

	if (review.trim() === '') {
		error.review = 'Required'
		isError = true
	}

	if (review.length > 750) {
		error.review = 'Review needs to be less than 750 characters.'
	}

	if (genre.trim() === '') {
		error.genre = 'Required'
		isError = true
	}

	if (category.trim() === '') {
		error.category = 'Required'
		isError = true
	}

	if (isError) {
		throw new SubmissionError(error)
	} else {
		submitNewBook({title, author })
			.then(data => console.log(data))
	}
}

const renderField = ({type, label, input, meta: {touched, error}}) => (
  <div className="input-row">
  	<label>{label}</label>
    <input {...input} type={type}/>
    {touched && error && 
     <span className="error">{error}</span>}
  </div>
)

const BookFormFun = ({handleSubmit}) => (
	<form onSubmit={handleSubmit(submit)}>
		<Field name="title" label="Title" component={renderField} type="text" />
		<Field name="author" label="Author" component={renderField} type="text" />
		<Field name="pages" label="Pages" component={renderField} type="text" />
    <div>
      <label>
        <Field
          name="genre"
          component="input"
          type="radio"
          value="fiction"
          checked
        />{' '}
        Fiction
      </label>
      <label>
        <Field
          name="genre"
          component="input"
          type="radio"
          value="nonfiction"
        />{' '}
        Nonfiction
      </label>
    </div>
		<Field name="category" label="Category" component={renderField} type="text" />
		<Field name="review" label="Review" component={renderField} type="textarea" />
		<div className="submit-button">
			<button type="submit">Add</button>
		</div>
	</form>
)

const BookForm = reduxForm({form: 'addBook'})(BookFormFun)

export default BookForm 

// {title='', author='', pages='', review='', genre='', category=''}


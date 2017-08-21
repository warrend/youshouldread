import React, {Component} from 'react';
import {Field, reduxForm, SubmissionError} from 'redux-form';

const submit = ({title='', author='', pages='', review='', genre='', category=''}) => {
	let error = {}
	let isError = false

	if (title.trim() === '') {
		error.title = 'Required'
		isError = true
	}

	if (author.trim() === '') {
		error.title = 'Required'
		isError = true
	}

	if (pages.trim() === '') {
		error.title = 'Required'
		isError = true
	}

	if (review.trim() === '') {
		error.title = 'Required'
		isError = true
	}

	if (genre.trim() === '') {
		error.title = 'Required'
		isError = true
	}

	if (category.trim() === '') {
		error.title = 'Required'
		isError = true
	}

	if (isError) {
		throw new SubmissionError(error)
	} else {
		// submit form to server
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
		<button type="submit">Add</button>
	</form>
)

const BookForm = reduxForm({form: 'addBook'})(BookFormFun)

export default BookForm 


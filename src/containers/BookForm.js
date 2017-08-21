import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

const submit = (values) => {
	console.log(values)
}

const renderField = ({label, input, meta: {touched, error}}) => (
  <div className="input-row">
  	<label>{label}</label>
    <input {...input} type="text"/>
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


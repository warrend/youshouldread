import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/bookActions';
import {RaisedButton, RadioButtonGroup, RadioButton} from 'material-ui'
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

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

	handleInputChange = (event) => {
		const name = event.target.name
		const value = event.target.value

		this.setState({
			[name]: value
		})
	}

  handleOnSubmit = (event) => {
  	event.preventDefault()  	
  	this.props.actions.submitNewBook(this.state)
  	console.log("Submitted book: " + this.state)
  }

	render() {
		return(	
			<ValidatorForm onSubmit={event => this.handleOnSubmit(event)}>
				
				<TextValidator 
					name="title" 
					floatingLabelText="Title"
					hintText="The Great Gatsby"
					value={this.state.title} 
					onChange={this.handleInputChange} 
					type="text" 
					validators={['required']}
          errorMessages={['this field is required']} />

        <br />
			
				<TextValidator 
					name="author" 
					floatingLabelText="Author"
					hintText="Raymond Chandler"
					value={this.state.author} 
					onChange={this.handleInputChange} 
					type="text" 
					validators={['required']}
          errorMessages={['this field is required']}
					/>

				<br />
			
				<TextValidator 
					name="pages" 
					floatingLabelText="Pages"
					hintText="345"
					value={this.state.pages} 
					onChange={this.handleInputChange} 
					type="text"
					validators={['required']}
          errorMessages={['this field is required']} />

				<br />
				
				<TextValidator 
					name="category" 
					floatingLabelText="Category"
					hintText="literary journalism"
					value={this.state.category} 
					onChange={this.handleInputChange} 
					type="text" 
					validators={['required']}
          errorMessages={['this field is required']}/>
				
				<br />
				
				<TextValidator 
					name="review" 
					floatingLabelText="Review"
					hintText="Here's why this needs to be your next book..."
					value={this.state.review} 
					onChange={this.handleInputChange} 
					multiLine={true}
          rows={6}
          rowsMax={8}
					validators={['required']}
          errorMessages={['this field is required']}/>

				
        <RadioButtonGroup>
          <RadioButton 
          	name="genre"
          	label="Fiction"
          	value="fiction"
          	onChange={this.handleInputChange}
          	checked={this.state.genre === 'fiction'}
        	/>
	        <RadioButton
	          name="genre"
	          label="nonfiction"
	          value="nonfiction"
	          checked={this.state.genre === 'nonfiction'}
	          onChange={this.handleInputChange}
	        />
        </RadioButtonGroup>
    
 				<RaisedButton
          type="submit"
          label="Add"
          />
		 		
			</ValidatorForm>
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


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
    console.log(this.state)
    this.props.actions.submitNewBook(this.state)
      .then(
        res => this.props.actions.bkFetchBooks()
      )

    this.setState({
			title: '', 
			author: '', 
			pages: '', 
			review: '', 
			genre: '', 
			category: ''
		})

    window.scrollTo(0, 0)
  }
  	// event.preventDefault() 
  	// console.log(this.state) 	
  	//this.props.actions.submitNewBook(this.state)
  	//console.log("Submitted book: " + this.state)

	render() {

		const buttonStyle = {
			marginTop: '30px'
		}

		return(	
			<ValidatorForm className="book-form" onSubmit={event => this.handleOnSubmit(event)}>
				
				<TextValidator 
					name="title" 
					floatingLabelText="Title"
					hintText="The Great Gatsby"
					value={this.state.title} 
					onChange={this.handleInputChange} 
					type="text" 
					validators={['required']}
          errorMessages={['Add your book title']} />

        <br />
			
				<TextValidator 
					name="author" 
					floatingLabelText="Author"
					hintText="Raymond Chandler"
					value={this.state.author} 
					onChange={this.handleInputChange} 
					type="text" 
					validators={['required']}
          errorMessages={['Add the author']}
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
          errorMessages={['How many pages?']} />

				<br />
				
				<TextValidator 
					name="category" 
					floatingLabelText="Category"
					hintText="literary journalism"
					value={this.state.category} 
					onChange={this.handleInputChange} 
					type="text" 
					validators={['required']}
          errorMessages={['Add your book category']}/>
				
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
          errorMessages={['Add your review']}/>
 				<RadioButtonGroup 
 					name="genre" 
 					onChange={this.handleInputChange}
 					validators={['required']}
 					errorMessages={['Fiction or nonfiction?']}
 					>
	        <RadioButton 
	        	label="fiction"
	        	value="fiction"	        	
	      	/>
	        <RadioButton	        	
	          label="nonfiction"
	          value="nonfiction"          
	        />
	      </RadioButtonGroup>
    
 				<RaisedButton
          type="submit"
          label="Add"
          style={buttonStyle}
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
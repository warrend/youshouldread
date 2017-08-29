export default function errorReducer(state='', action) {
	switch(action.type) {
		case 'SUBMIT_SUCCESS':
	    return 'Book submitted successfully. Thanks!'
	  case 'SUBMIT_FAILURE':
	  	return 'There was an error. Please try again.'
	  case 'RESET_SUCCESS_HANDLER':
      return ''
	  default:
	    return state;
  }
}
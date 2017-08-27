export default function booksReducer(state= [], action) {
  switch ( action.type ) {
    case 'FETCH_BOOKS':
      return action.payload
    case 'BK_FETCH_BOOKS':
      return action.payload
  	case 'SUBMIT_SUCCESS':
      return 'Book submitted successfully. Thanks!'
    case 'SUBMIT_FAILURE':
    	return 'There was an error. Please try again. '
     default:
      return state;
   }
}
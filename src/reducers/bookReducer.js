export default function booksReducer(state= [], action) {
  switch ( action.type ) {
    case 'FETCH_BOOKS':
      return action.payload
    case 'BK_FETCH_BOOKS':
      return action.payload
  	case 'SUBMIT_FORM_SUCCESS':
      return 'Book submitted successfully. Thanks!'
     default:
      return state;
   }
}
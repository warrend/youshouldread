export default function booksReducer(state = [], action) {
  switch ( action.type ) {
    case 'FETCH_BOOKS':
      return action.payload
    case 'BK_FETCH_BOOKS':
      return action.payload
    case 'ADD_BOOK_SUCCESS':
    	console.log(state)
    	return state.concat(action.payload)
    default: 
      return state;
   }
}
export default function booksReducer(state = [], action) {
  switch ( action.type ) {
    case 'FETCH_BOOKS':
      return action.payload
    case 'ADD_LIKE':
      console.log("ADD_LIKE returns: " + state.books)
      return Object.assign({}, state.books) 
    case 'ADD_BOOK_SUCCESS':
    	console.log(state)
    	return state.concat(action.payload)
    default: 
      return state;
   }
}
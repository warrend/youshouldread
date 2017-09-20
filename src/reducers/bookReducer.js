export default function booksReducer(state = [], action) {
  switch ( action.type ) {
    case 'FETCH_BOOKS':
      return action.payload
    case 'ADD_LIKE': {
      return state.map(book => {
        if (book.id !== action.bookId) {
          return book
        }

        return Object.assign({}, book,
          {likes: action.likes}
        )
      })
    }
    case 'ADD_BOOK_SUCCESS':
    	console.log(state)
    	return state.concat(action.payload)
    default: 
      return state;
   }
}
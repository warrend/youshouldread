export default function booksReducer(state= [], action) {
  switch ( action.type ) {
    case 'FETCH_BOOKS':
      return action.payload
    // case 'SELECT_BOOK':
    // 	return console.log('Book selected.')
    default:
      return state;
  }
}
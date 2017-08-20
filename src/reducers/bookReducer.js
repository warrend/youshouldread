export default function booksReducer(state= [], action) {
  switch ( action.type ) {
    case 'FETCH_BOOKS':
      //return {loading: false, books: action.payload}
      return action.payload
    default:
      return state;
  }
}
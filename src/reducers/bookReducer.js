export default function booksReducer(state = [], action) {
  switch ( action.type ) {
    case 'FETCH_BOOKS':
      return action.payload
    case 'BK_FETCH_BOOKS':
      return action.payload
    default: 
      return state;
   }
}
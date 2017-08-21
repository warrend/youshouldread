import fetch from 'isomorphic-fetch';

export function fetchBooks() {
  return function(dispatch) {
    dispatch({type: 'LOADING_BOOKS'})
    return fetch(
    'http://localhost:3000/books')
      .then(res => res.json())
      .then(books => dispatch({type: 'FETCH_BOOKS', payload: books}))
  }
}

export const selectBook = (book) => {
	console.log('Selected book ' + book.title)
	return {
		type: 'SELECT_BOOK',
		payload: book
	}
}
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

export function bkFetchBooks() {
  return function(dispatch) {
    fetch(
    'http://localhost:3000/books')
      .then(res => res.json())
      .then(books => dispatch({type: 'FETCH_BOOKS', payload: books}))
  }
}

export function submitNewBook(data, history) {
  return function(dispatch) {
    return fetch('http://localhost:3000/books', {
      method: 'POST', 
      mode: 'CORS',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        dispatch({type: 'SUBMIT_SUCCESS'})
        return res.json()
      })
      .then(book => {
        dispatch({type: 'ADD_BOOK_SUCCESS', payload: book})
        history.push("/books")
      })  
  }
}
// error => dispatch({type: 'SUBMIT_FAILURE', error: error,
//         suppressGlobalErrorNotification: (
//           error.response &&
//           error.response.status === 400
//         )

export function resetSuccessHandler() {
  return function(dispatch) {
    dispatch({type: 'RESET_SUCCESS_HANDLER'})
  }
}
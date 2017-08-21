import {combineReducers} from 'redux';
// import errorReducer from './errorReducer';
import bookReducer from './bookReducer';
import loadingReducer from './loadingReducer';
import selectBookReducer from './selectBookReducer'

const rootReducer = combineReducers({ 
	loading: loadingReducer,
	books: bookReducer,
	selectedBook: selectBookReducer
})

export default rootReducer;
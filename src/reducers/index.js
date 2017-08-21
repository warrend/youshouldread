import {combineReducers} from 'redux';
// import errorReducer from './errorReducer';
import bookReducer from './bookReducer';
import loadingReducer from './loadingReducer';
import selectBookReducer from './selectBookReducer'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({ 
	loading: loadingReducer,
	books: bookReducer,
	selectedBook: selectBookReducer,
	form: formReducer
})

export default rootReducer;
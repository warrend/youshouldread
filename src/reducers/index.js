import {combineReducers} from 'redux';
// import errorReducer from './errorReducer';
import bookReducer from './bookReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({ 
	loading: loadingReducer,
	books: bookReducer
})

export default rootReducer;
import { createStore, combineReducers, compose } from 'redux';
import BooksReducer from './reducers/BooksReducer';

const rootReducer = combineReducers({
	books: BooksReducer
});

let composeEnhancers = compose;

if (__DEV__) {
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
	return createStore(rootReducer, composeEnhancers());
}

export default configureStore;
import { createStore, combineReducers, compose } from 'redux';
import BooksReducer from './reducers/BooksReducer';
import MemberReducer from './reducers/MemberReducer';

const rootReducer = combineReducers({
	books: BooksReducer,
	members: MemberReducer
});

let composeEnhancers = compose;

if (__DEV__) {
	composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
	return createStore(rootReducer, composeEnhancers());
}

export default configureStore;
import { ADD_BOOK, DELETE_BOOK, GET_ALL_BOOKS } from '../actions/actionTypes';

let Datastore = require('react-native-local-mongodb');
let bookDb = new Datastore({ filename: 'BookStorage', autoload: true });

const initialState = {
	books: [],
	bookDb
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_BOOK:
			bookDb.insert(action.book);
			return {
				...state,
				books: state.books.concat(action.book),
			}
		case DELETE_BOOK:
			bookDb.remove({name: action.bookName});
			return {
				...state,
				books: state.books.filter(book => {
					return book.name !== action.bookName
				})
			}
		case GET_ALL_BOOKS:
			return {
				...state,
				books: action.allBooks
			}
		default:
			return state;
	}
};

export default reducer;
import { ADD_BOOK, DELETE_BOOK, GET_ALL_BOOKS, ADD_MEMBER_TO_BOOK } from '../actions/actionTypes';

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
			bookDb.remove({ name: action.bookName });
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
		case ADD_MEMBER_TO_BOOK:
			console.log('Done');
			bookDb.update({ name: action.bookName }, { $set: { owner: action.memberName } })
			const newBookList = state.books.map(book => {
				if (book.name === action.bookName) {
					book.owner = action.memberName;
				}
				return book;
			})
			return {
				...state,
				books: newBookList
			}
		default:
			return state;
	}
};

export default reducer;
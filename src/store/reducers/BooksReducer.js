import { ADD_BOOK, DELETE_BOOK } from '../actions/actionTypes';

const initialState = {
	books: []
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_BOOK:
			console.log(state);
			return {
				...state,
				books: state.books.concat(action.book),
			}
		case DELETE_BOOK:
			return{
				...state,
				books: state.books.filter(book => {
					return book.name !== action.book.name
				})
			}
		default:
			return state;
	}
};

export default reducer;
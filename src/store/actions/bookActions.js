import { ADD_BOOK, DELETE_BOOK } from './actionTypes';

export const addBook = newBook => {
	return {
		type: ADD_BOOK,
		book: newBook
	};
}

export const deleteBook = book => {
	return {
		type: DELETE_BOOK,
		book
	}
}
import { ADD_BOOK, DELETE_BOOK, GET_ALL_BOOKS } from './actionTypes';

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

export const getAllBooks = allBooks => {
	return{
		type: GET_ALL_BOOKS,
		allBooks
	}
}
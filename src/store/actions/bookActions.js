import { ADD_BOOK, DELETE_BOOK, GET_ALL_BOOKS, ADD_MEMBER_TO_BOOK } from './actionTypes';

export const addBook = newBook => {
	return {
		type: ADD_BOOK,
		book: newBook
	};
}

export const deleteBook = bookName => {
	return {
		type: DELETE_BOOK,
		bookName
	}
}

export const getAllBooks = allBooks => {
	return {
		type: GET_ALL_BOOKS,
		allBooks
	}
}

export const addMemberToBook = (bookName, memberName) => {
	return {
		type: ADD_MEMBER_TO_BOOK,
		bookName,
		memberName
	}
}
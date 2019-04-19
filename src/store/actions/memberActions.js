import { ADD_MEMBER, DELETE_MEMBER, GET_ALL_MEMBERS, ADD_BOOK_TO_MEMBER } from './actionTypes';

export const addMember = newMember => {
	return {
		type: ADD_MEMBER,
		member: newMember
	};
}

export const deleteMember = member => {
	return {
		type: DELETE_MEMBER,
		member
	}
}

export const getAllMembers = allMembers => {
	return{
		type: GET_ALL_MEMBERS,
		allMembers
	}
}

export const addBookToMember = (bookName, memberName) => {
	return{
		type: ADD_BOOK_TO_MEMBER,
		bookName,
		memberName
	}
}
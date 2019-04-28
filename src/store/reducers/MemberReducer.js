import { ADD_MEMBER, DELETE_MEMBER, GET_ALL_MEMBERS, ADD_BOOK_TO_MEMBER, EXTEND_DATE, MEMBERSHIP_EXPIRY, MEMBERSHIP_RENEW } from '../actions/actionTypes';
import { displayDate, getNextDate } from '../../functions/date';

let Datastore = require('react-native-local-mongodb');
let memberDb = new Datastore({ filename: 'MemberStorage', autoload: true });

const initialState = {
	members: [],
	memberDb
}

console.log(displayDate());

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MEMBER:
			memberDb.insert(action.member);
			return {
				...state,
				members: state.members.concat(action.member),
			}
		case DELETE_MEMBER:
			memberDb.remove({ name: action.member.name });
			return {
				...state,
				members: state.members.filter(member => {
					return member.name !== action.member.name
				})
			}
		case GET_ALL_MEMBERS:
			return {
				...state,
				members: action.allMembers
			}
		case ADD_BOOK_TO_MEMBER:
			memberDb.update({ name: action.memberName }, { $push: { booksIssued: { name: action.bookName, date: displayDate() } }, $set: { nextIssue: new Date(getNextDate()) } });
			const newMemberList = state.members.map(member => {
				if (member.name === action.memberName) {
					member.booksIssued.push({ name: action.bookName, date: displayDate() });
					member.nextIssue = new Date(getNextDate());
				}
				return member;
			});
			return {
				...state,
				members: newMemberList
			}
		case EXTEND_DATE:
			memberDb.update({ name: action.memberName }, { $set: { nextIssue: new Date(getNextDate()) } });
			const newMemberList1 = state.members.map(member => {
				if (member.name === action.memberName) {
					member.nextIssue = new Date(getNextDate());
				}
				return member;
			});
			return {
				...state,
				members: newMemberList1
			}
		case MEMBERSHIP_EXPIRY:
			memberDb.update({}, { $set: { paid: false } }, { multi: true });
			const newMemberList2 = state.members.map(member => {
				member.paid = false;
				return member;
			});
			return {
				...state,
				members: newMemberList2
			}
		case MEMBERSHIP_RENEW:
			memberDb.update({ name: action.memberName }, { $set: { paid: true } });
			const newMemberList3 = state.members.map(member => {
				if (member.name === action.memberName) {
					member.paid = true;
				}
				return member;
			});
			return {
				...state,
				members: newMemberList3
			}
		default:
			return state;
	}
};

export default reducer;
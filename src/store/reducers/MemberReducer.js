import { ADD_MEMBER, DELETE_MEMBER, GET_ALL_MEMBERS } from '../actions/actionTypes';

let Datastore = require('react-native-local-mongodb');
let memberDb = new Datastore({ filename: 'MemberStorage', autoload: true });

const initialState = {
	members: [],
	memberDb
}

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
		default:
			return state;
	}
};

export default reducer;
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'
import { nextDue } from '../../functions/date';
import Icon from 'react-native-vector-icons/MaterialIcons';

const IndivisualMember = props => {
	const { member } = props;
	let rightIcon = null;
	if(nextDue(member.nextIssue)){
		rightIcon = (<Icon size={10} name='fiber-manual-record' color='red' />);
	}
	return (
		<TouchableOpacity
			onPress={() => {
				props.navigation.navigate('MemberDetails', {
					memberName: member.name,
					member: member,
					lastBook: member.booksIssued[member.booksIssued.length - 1].name
				});
			}}
		>
			<ListItem
				bottomDivider={true}
				title={member.name}
				subtitle={member.booksIssued[member.booksIssued.length - 1].name}
				rightIcon={rightIcon}
			>
			</ListItem>
		</TouchableOpacity>
	)
};

export default IndivisualMember;
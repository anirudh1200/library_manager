import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'

const IndivisualMember = props => {
	const { member } = props;
	return (
		<TouchableOpacity
			onPress={() => {
				props.navigation.navigate('MemberDetails', {
					memberName: member.name,
					member: member
				});
			}}
		>
			<ListItem
				bottomDivider={true}
				title={member.name}
				subtitle={member.booksIssued[member.booksIssued.length - 1].name}
			>
			</ListItem>
		</TouchableOpacity>
	)
};

export default IndivisualMember;
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements'

const IndivisualMember = props => {
	return (
		<TouchableOpacity
			onPress={() => {
				props.navigation.navigate('MemberDetails', {
					memberName: props.member.name,
					member: props.member
				});
			}}
		>
			<ListItem
				bottomDivider={true}
				title={props.member.name}
				subtitle={'sample'}
			>
			</ListItem>
		</TouchableOpacity>
	)
};

export default IndivisualMember;
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

const IndivisualMember = props => {
	console.log(props);
	return (
		<View style={styles.listItem}>
			<Text>{props.memberName}</Text>
		</View>
	)
};

export default IndivisualMember;

const styles = StyleSheet.create({
	listItem: {
		width: '100%',
		padding: 10,
		backgroundColor: '#ccc',
		margin: 5,
		flexDirection: 'row',
		alignItems: 'center'
	},
	placeImage: {
		marginRight: 8,
		height: 30,
		width: 30
	},
});
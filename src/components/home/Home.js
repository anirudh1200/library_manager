import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Home extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity>
					<Text
						style={styles.welcome}
						onPress={() => this.props.navigation.navigate('AddBook')}
					>
						<Icon size={30} name='add' color='red' />
						Add Book
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
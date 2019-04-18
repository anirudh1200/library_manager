import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class Home extends Component {
	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.button}>
					<Icon size={25} name='add' color='grey' />
					<Text
						style={styles.welcome}
						onPress={() => this.props.navigation.navigate('AddBook')}
					>
						Add New Book
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}>
					<Icon size={25} name='add' color='grey' />
					<Text
						style={styles.welcome}
						onPress={() => this.props.navigation.navigate('BookList')}
					>
						View Books
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}>
					<Icon size={25} name='add' color='grey' />
					<Text
						style={styles.welcome}
						onPress={() => this.props.navigation.navigate('AddMember')}
					>
						Add New Member
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}>
					<Icon size={25} name='add' color='grey' />
					<Text
						style={styles.welcome}
						onPress={() => this.props.navigation.navigate('MemberList')}
					>
						View Members
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
		paddingTop: 100,
		paddingBottom: 100
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		padding: 10
	},
	button: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		width: 300,
		paddingLeft: 8
	}
});
import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, StatusBar, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux';
import { membershipExpiry } from '../../store/actions/index';

class Home extends Component {

	static navigationOptions = {
		title: "My Library",
		headerTitleStyle: {
			textAlign: "center",
			flex: 1,
			color: 'white',
			fontSize: 30,
		},
	};

	componentDidMount = () => {
		SplashScreen.hide();
	}

	render() {
		return (
			<View style={styles.container}>
				<StatusBar
					backgroundColor='#03a9f4'
				/>
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
					<Icon size={25} name='book' color='grey' />
					<Text
						style={styles.welcome}
						onPress={() => this.props.navigation.navigate('BookList')}
					>
						View Books
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}>
					<Icon size={25} name='group-add' color='grey' />
					<Text
						style={styles.welcome}
						onPress={() => this.props.navigation.navigate('AddMember')}
					>
						Add New Member
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}>
					<Icon size={25} name='face' color='grey' />
					<Text
						style={styles.welcome}
						onPress={() => this.props.navigation.navigate('MemberList')}
					>
						View Members
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}>
					<Icon size={25} name='remove' color='grey' />
					<Text
						style={styles.welcome}
						onPress={() => {
							Alert.alert(
								'Expire Membership?',
								'Are you sure you want to expire all the current memberships (usually in August)?',
								[
									{
										text: 'Cancel',
										onPress: () => { },
										style: 'cancel',
									},
									{
										text: 'Expire', onPress: () => {
											this.props.membershipExpiry();
										}
									},
								],
								{ cancelable: false },
							);
						}}
					>
						Renew Memberships
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return{
		membershipExpiry: () => dispatch(membershipExpiry())
	}
}

export default connect(null, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#FDFDFD',
		paddingTop: 50,
		paddingBottom: 50
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
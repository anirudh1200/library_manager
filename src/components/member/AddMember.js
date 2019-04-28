import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { addMember } from '../../store/actions/index';
import { getNextDate, displayDate } from '../../functions/date';

class AddMember extends Component {

	static navigationOptions = {
		title: 'Add Member',
	};

	state = {
		name: '',
		number: '',
		date: displayDate(),
		booksIssued: [{ name: 'none', date: 'none' }],
		nextIssue:	new Date(getNextDate()),
	}

	render() {
		return (
			<View style={styles.addMemberForm}>
				<Text style={styles.header}>New Member</Text>
				<TextInput
					style={styles.textInput}
					placeholder='Name'
					underlineColorAndroid={'transparent'}
					value={this.state.name}
					onChangeText={(name) => this.setState({ name })}
				/>
				<TextInput
					style={styles.textInput}
					placeholder='Mobile Number'
					underlineColorAndroid={'transparent'}
					value={this.state.number}
					onChangeText={(number) => this.setState({ number })}
				/>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						this.props.onAddMember(this.state)
						this.props.navigation.navigate('Home');
					}}
				>
					<Text style={styles.btnText}>Add</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onAddMember: member => dispatch(addMember(member)),
	}
}

export default connect(null, mapDispatchToProps)(AddMember);

const styles = StyleSheet.create({
	addMemberForm: {
		alignSelf: 'stretch',
		padding: 30,
	},
	header: {
		fontSize: 24,
		color: '#000',
		paddingBottom: 10,
		marginBottom: 40,
		borderBottomColor: '#199187',
		borderBottomWidth: 1,
	},
	textInput: {
		alignSelf: 'stretch',
		height: 40,
		marginBottom: 30,
		color: '#000',
		borderBottomColor: '#f8f8f8',
		borderBottomWidth: 1
	},
	button: {
		alignSelf: 'stretch',
		alignItems: 'center',
		padding: 20,
		backgroundColor: '#03a9f4',
		marginTop: 30,
	},
	btnText: {
		color: '#fff',
		fontWeight: 'bold',
	}
});
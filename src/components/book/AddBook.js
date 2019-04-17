import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Picker } from 'react-native';

class AddBook extends Component {

	state = {
		name: '',
		code: '',
		language: 'english'
	}

	render() {
		return (
			<View style={styles.addBookForm}>
				<Text style={styles.header}>Add Book</Text>
				<TextInput
					style={styles.textInput}
					placeholder='Book Name'
					underlineColorAndroid={'transparent'}
					value={this.state.name}
					onChangeText={(name) => this.setState({ name })}
				/>
				<TextInput
					style={styles.textInput}
					placeholder='Book Code'
					underlineColorAndroid={'transparent'}
					value={this.state.code}
					onChangeText={(code) => this.setState({ code })}
				/>
				<Picker
					selectedValue={this.state.language}
					style={{ height: 50, width: 300 }}
					onValueChange={(itemValue) =>
						this.setState({ language: itemValue })
					}>
					<Picker.Item label="English" value="english" />
					<Picker.Item label="Hindi" value="hindi" />
					<Picker.Item label="Marathi" value="marathi" />
					<Picker.Item label="Kannada" value="kannada" />
					<Picker.Item label="Gujarati" value="gujarati" />
				</Picker>
				<TouchableOpacity
					style={styles.button}
					onPress={() => console.log(this.state)}
				>
					<Text style={styles.btnText}>Add</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default AddBook;

const styles = StyleSheet.create({
	addBookForm: {
		alignSelf: 'stretch',
		padding: 30
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
		backgroundColor: '#59cbbd',
		marginTop: 30,
	},
	btnText: {
		color: '#fff',
		fontWeight: 'bold',
	}
});
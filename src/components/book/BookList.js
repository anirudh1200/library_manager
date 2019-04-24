import React, { Component } from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import IndivisualBook from './IndivisualBook';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Overlay, ListItem } from 'react-native-elements';

class BookList extends Component {

	static navigationOptions = ({ navigation }) => {
		return {
			title: 'Book List',
			headerRight: (
				<TouchableOpacity
					style={{ paddingRight: 10 }}
					onPress={() => {
						navigation.setParams({ overlay: true })
					}}
				>
					<Icon size={30} name='sort' color='black' />
				</TouchableOpacity>
			),
		}
	}

	state = {
		'English': true,
		'Hindi': true,
		'Marathi': true,
		'Kannada': true,
		'Gujarati': true,
	}

	componentDidMount = () => {
		this.props.navigation.setParams({ overlay: false });
	}

	render() {
		const allBooks = this.props.books;
		const books = allBooks.filter(e => (this.state[e.language]));
		const languages = ['English', 'Hindi', 'Marathi', 'Kannada', 'Gujarati', 'All'];
		const filter = languages.map((language, index) => (
			<ListItem
				key={index}
				title={language}
				onPress={() => {
					languages.map((lan, index) => {
						if (language === 'All') {
							languages.map(e => this.setState({ [e]: true }));
						} else {
							if (lan === language) {
								this.setState({ [lan]: true });
							} else {
								this.setState({ [lan]: false })
							}
						}
					});
					this.props.navigation.setParams({ overlay: false });
				}}
			/>
		))
		return (
			<View>
				<Overlay
					isVisible={this.props.navigation.getParam('overlay', false)}
					overlayStyle={styles.overlay}
					onRequestClose={() => this.props.navigation.setParams({ overlay: false })}
					onBackdropPress={() => this.props.navigation.setParams({ overlay: false })}
				>
					<View>
						<Text style={styles.header}>Languages:</Text>
						{filter}
						<TouchableOpacity
							style={styles.button}
							onPress={() => this.props.navigation.setParams({ overlay: false })}
						>
							<Text style={styles.btnText}>Done</Text>
						</TouchableOpacity>
					</View>
				</Overlay>
				<FlatList
					data={books}
					keyExtractor={(item, index) => index.toString()}
					renderItem={({ item }) => (
						<IndivisualBook
							book={item}
						/>
					)}
				>
				</FlatList>
			</View>
		)
	}
}

const mapStateToProps = state => {
	return {
		books: state.books.books
	}
}

export default connect(mapStateToProps)(BookList);

const styles = StyleSheet.create({
	overlay: {
		alignSelf: 'center',
		padding: 20,
	},
	header: {
		fontSize: 24,
		color: '#000',
		paddingBottom: 10,
		marginBottom: 40,
		borderBottomColor: '#199187',
		borderBottomWidth: 1,
	},
	button: {
		alignSelf: 'stretch',
		alignItems: 'center',
		padding: 10,
		backgroundColor: '#03a9f4',
		margin: 10
	},
	btnText: {
		color: '#fff',
		fontWeight: 'bold',
	}
})
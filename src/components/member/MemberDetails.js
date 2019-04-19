import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, FlatList } from 'react-native';
import { SearchBar, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';

class MemberDetails extends Component {

	static navigationOptions = ({ navigation }) => {
		return {
			title: navigation.getParam('memberName', 'Name'),
		};
	};

	state = {
		...this.props.navigation.getParam('member', 'notfound'),
		search: '',
		modalVisible: false,
		allBooks: this.props.allBooks,
		selectedBook: ''
	};

	updateSearch = search => {
		this.setState({ search });
	};

	render() {
		const { allBooks, search } = this.state;
		console.log(allBooks);
		const books = allBooks.filter(e => (e.name.indexOf(search) !== -1));
		console.log("Books");
		console.log(books);
		console.log(search);
		return (
			<View style={styles.body}>
				<Modal
					animationType="slide"
					transparent={false}
					visible={this.state.modalVisible}
					onRequestClose={() => {
						this.setState({ modalVisible: false })
					}}>
					<View style={styles.body}>
						<View style={styles.top}>
							<SearchBar
								lightTheme
								placeholder="Search Book..."
								onChangeText={this.updateSearch}
								value={this.state.search}
								containerStyle={styles.container}
								inputContainerStyle={styles.inputContainerStyle}
								autoCorrect={false}
							/>
						</View>
						<View style={styles.middle}>
							<FlatList
								data={books}
								keyExtractor={(item, index) => index.toString()}
								renderItem={({ item }) => (
									<TouchableOpacity
										onPress={() => this.setState({ selectedBook: item.name })}
									>
										<ListItem
											title={item.name}
											subtitle={item.language}
										/>
									</TouchableOpacity>
								)}
							/>
						</View>
					</View>
				</Modal>
				<View style={styles.body}>
					<View style={styles.top}>
						<Text style={styles.header}>Mobile Number: {this.state.number}</Text>
					</View>
					<View style={styles.middle}>
						<Text>Anirudh</Text>
					</View>
					<View style={styles.bottom}>
						<TouchableOpacity
							style={styles.button}
							onPress={() => {
								this.setState({ modalVisible: true });
							}}
						>
							<Text style={styles.btnText}>Add Book</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		)
	}
}

const mapStateToProps = state => {
	return {
		allBooks: state.books.books
	}
}

const mapDispatchToProps = dispatch => {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberDetails);

const styles = StyleSheet.create({
	body: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		padding: 15,
		alignItems: 'stretch',
	},
	top: {
		flex: 2
	},
	header: {
		fontSize: 18,
		color: '#000',
		paddingBottom: 10,
		marginBottom: 10,
		borderBottomColor: '#199187',
		borderBottomWidth: 1,
	},
	container: {
		margin: 1,
		padding: 1,
		backgroundColor: 'white',
		borderWidth: 0,
		height: 50
	},
	button: {
		alignSelf: 'stretch',
		alignItems: 'center',
		padding: 15,
		backgroundColor: '#03a9f4',
	},
	btnText: {
		color: '#fff',
		fontWeight: 'bold',
	},
	inputContainerStyle: {
		backgroundColor: 'white'
	},
	middle: {
		flex: 10
	},
	bottom: {
		flex: 1,
	}
});
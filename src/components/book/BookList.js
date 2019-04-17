import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Picker, FlatList } from 'react-native';
import { connect } from 'react-redux';
import IndivisualBook from './IndivisualBook';

class BookList extends Component {

	static navigationOptions = {
		title: 'Book List',
	};

	render() {
		console.log(this.props.books);
		return (
			<FlatList
				data={this.props.books}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({item}) => {
					console.log(item)
					return (<IndivisualBook
						bookName={item.name}
					/>)
				}}
			>
			</FlatList>
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

})
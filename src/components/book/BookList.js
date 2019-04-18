import React, { Component } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import IndivisualBook from './IndivisualBook';
import Icon from 'react-native-vector-icons/MaterialIcons';

class BookList extends Component {

	static navigationOptions = {
		title: 'Book List',
		headerRight: (
			<TouchableOpacity style={{paddingRight: 10}}>
				<Icon size={30} name='sort' color='black' />
			</TouchableOpacity>
		),
	};

	render() {
		return (
			<FlatList
				data={this.props.books}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item }) => (
					<IndivisualBook
						book={item}
					/>
				)}
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
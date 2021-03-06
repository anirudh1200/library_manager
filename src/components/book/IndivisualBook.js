import React from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { deleteBook } from '../../store/actions/index';

const IndivisualBook = props => {
	const { book } = props;
	let subtitle = null;
	if(book.language === 'Hindi'){
		subtitle = book.language + ' - ' +book.genre;
	} else {
		subtitle = book.language
	}
	return (
		<ListItem
			bottomDivider={true}
			title={book.name}
			subtitle={subtitle}
			rightSubtitle={book.owner !== 'none' ? (book.owner) : ('')}
			rightIcon={
				<TouchableOpacity
					onPress={() => {
						Alert.alert(
							'Delete Book?',
							book.name,
							[
								{
									text: 'Cancel',
									onPress: () => { },
									style: 'cancel',
								},
								{ text: 'OK', onPress: () => props.deleteBook(book.name) },
							],
							{ cancelable: false },
						);
					}}
				>
					<Icon name='delete' color='grey' size={18} />
				</TouchableOpacity>
			}
		/>
	)
};

const mapDispatchToProps = dispatch => {
	return {
		deleteBook: bookName => dispatch(deleteBook(bookName))
	}
}

export default connect(null, mapDispatchToProps)(IndivisualBook);
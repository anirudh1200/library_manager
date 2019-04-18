import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';

class MemberDetails extends Component {

	static navigationOptions = ({ navigation }) => {
		return {
			title: navigation.getParam('memberName', 'Name'),
		};
	};

	state = {
		...this.props.navigation.getParam('member', 'notfound'),
		search: ''
	};

	updateSearch = search => {
		this.setState({ search });
	};

	render() {
		console.log(this.state);
		return (
			<View>
				<Text>Mobile Number: {this.state.number}</Text>
				<SearchBar
					placeholder="Search Book..."
					onChangeText={this.updateSearch}
					value={this.state.search}
				/>
				<TouchableOpacity
					onPress={() => {
						console.log('selected');
					}}
				>
					<Text>Add Book</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

export default MemberDetails;
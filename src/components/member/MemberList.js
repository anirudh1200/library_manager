import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Picker, FlatList } from 'react-native';
import { connect } from 'react-redux';
import IndivisualMember from './IndivisualMember';

class MemberList extends Component {

	static navigationOptions = {
		title: 'Member List',
	};

	render() {
		return (
			<FlatList
				data={this.props.members}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item }) => (
					<IndivisualMember
						navigation={this.props.navigation}
						member={item}
					/>
				)}
			>
			</FlatList>
		)
	}
}

const mapStateToProps = state => {
	return {
		members: state.members.members
	}
}

export default connect(mapStateToProps)(MemberList);

const styles = StyleSheet.create({

})
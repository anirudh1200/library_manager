import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import IndivisualMember from './IndivisualMember';
import { SearchBar } from 'react-native-elements';

class MemberList extends Component {

	static navigationOptions = {
		title: 'Member List',
	};

	state = {
		search: '',
	}

	updateSearch = search => {
		this.setState({ search });
	};

	render() {
		const { members } = this.props;
		const displayMembers = members.filter(e => (e.name.indexOf(this.state.search) !== -1));
		return (
			<View>
				<SearchBar
					lightTheme
					placeholder="Search"
					onChangeText={this.updateSearch}
					value={this.state.search}
					containerStyle={styles.container}
					inputContainerStyle={styles.inputContainerStyle}
					autoCorrect={false}
				/>
				<FlatList
					data={displayMembers}
					keyExtractor={(item, index) => index.toString()}
					renderItem={({ item }) => (
						<IndivisualMember
							navigation={this.props.navigation}
							member={item}
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
		members: state.members.members
	}
}

export default connect(mapStateToProps)(MemberList);

const styles = StyleSheet.create({
	inputContainerStyle: {
		backgroundColor: 'white'
	},
	container: {
		margin: 1,
		padding: 1,
		backgroundColor: 'white',
		borderWidth: 0,
		height: 50
	},
})
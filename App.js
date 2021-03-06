/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './src/components/home/Home';
import AddBook from './src/components/book/AddBook';
import BookList from './src/components/book/BookList';
import { connect } from 'react-redux';
import { getAllBooks } from './src/store/actions/index';
import { getAllMembers } from './src/store/actions/index';
import AddMember from './src/components/member/AddMember';
import MemberList from './src/components/member/MemberList';
import MemberDetails from './src/components/member/MemberDetails';
import { dynamicSort } from './src/functions/dynamicSort';

class App extends Component {

  componentDidMount = () => {
    this.props.bookDb.find({}, (err, allBooks) => {
      let sortedAllBooks = allBooks.sort(dynamicSort('name'));
      this.props.getAllBooks(sortedAllBooks);
    });
    this.props.memberDb.find({}, (err, allMembers) => {
      let sortedAllMembers = allMembers.sort(dynamicSort('name'));
      this.props.getAllMembers(sortedAllMembers);
    });
  }

  render() {
    return <AppContainer />
  }
}

const AppNavigator = createStackNavigator(
  {
    Home,
    AddBook,
    BookList,
    AddMember,
    MemberList,
    MemberDetails
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#03a9f4',
      },
    }
  }
)

const AppContainer = createAppContainer(AppNavigator);

const mapDispatchToProps = dispatch => {
  return {
    getAllBooks: allBooks => dispatch(getAllBooks(allBooks)),
    getAllMembers: allMembers => dispatch(getAllMembers(allMembers))
  }
}

const mapStateToProps = state => {
  return {
    bookDb: state.books.bookDb,
    memberDb: state.members.memberDb
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
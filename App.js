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

class App extends Component {

  componentDidMount = () => {
    this.props.bookDb.find({}, (err, allBooks) => this.props.getAllBooks(allBooks));
  }

  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator(
  {
    Home,
    AddBook,
    BookList,
  }
)

const AppContainer = createAppContainer(AppNavigator);

const mapDispatchToProps = dispatch => {
  return {
    getAllBooks: allBooks => dispatch(getAllBooks(allBooks))
  }
}

const mapStateToProps = state => {
  return {
    bookDb: state.books.bookDb
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
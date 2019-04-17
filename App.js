/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './src/components/home/Home';

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: Home
  }
)

const AppContainer = createAppContainer(AppNavigator);

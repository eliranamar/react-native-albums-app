/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import 'babel-polyfill';

import { Header } from './src/components/Header';
import { AlbumList } from './src/components/AlbumList';


export default class App extends Component {
  render() {
    return (
      <View>
        <Header text="Albums!" />
        <AlbumList />
      </View>
    );
  }
}


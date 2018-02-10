import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

export class Button extends Component {
  // constructor(props) {
  //   super(props);
  // }


  render() {
    return (
      <TouchableOpacity>
        <Text> click me </Text>
      </TouchableOpacity>
    );
  }
}


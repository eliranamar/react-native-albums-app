import React from 'react';
import PropTypes from 'prop-types';
import {
  Text, View,
} from 'react-native';

const styles = {
  viewStyle: {
    justifyContent:  'center',
    alignItems:      'center',
    backgroundColor: '#f8f8f8',
    height:          60,
    paddingTop:      15,
    shadowColor:     '#000',
    shadowOffset:    { width: 0, height: 4 },
    shadowOpacity:   0.2,
    elevation:       2,
    position:        'relative',
  },
  textStyle: {
    fontSize: 20,
    // textAlign: 'center',
    // margin:    10,
  },
};

export const Header = (props) => {
  const { viewStyle, textStyle } = styles;
  const { text } = props;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{text}</Text>
    </View>
  );
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

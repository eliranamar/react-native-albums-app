import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const styles = {
  containerStyle: {
    backgroundColor:   '#fff',
    borderBottomWidth: 1,
    padding:           5,
    justifyContent:    'flex-start',
    flexDirection:     'row',
    borderColor:       '#ddd',
    position:          'relative',
  },
};

export const CardSection = (props) => {
  // console.log(props);
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

CardSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

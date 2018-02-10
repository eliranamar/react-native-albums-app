import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const styles = {
  containerStyle: {
    shadowColor:       '#000',
    shadowOffset:      { width: 0, height: 2 },
    shadowOpacity:     0.1,
    shadowRadius:      2,
    borderWidth:       1,
    borderRadius:      2,
    borderBottomWidth: 0,
    borderColor:       '#ddd',
    elevation:         1,
    marginLeft:        5,
    marginRight:       5,
    marginTop:         10,
  },
};

export const Card = (props) => {
  console.log(props);
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

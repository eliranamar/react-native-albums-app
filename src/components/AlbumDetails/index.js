import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import { Card } from '../Card';
import { CardSection } from '../CardSection';

export const AlbumDetails = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
    </Card>
  );
};

AlbumDetails.propTypes = {
  album: PropTypes.object.isRequired,
};

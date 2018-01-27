import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  Text, View,
} from 'react-native';

import { AlbumDetails } from "../AlbumDetails";

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

export class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    };
  }

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then((res) => {
        this.setState({ albums: res.data });
      });
  }

  renderAlbums() {
    return this.state.albums.map((album) => {
      // console.log(album);
      return (
        <AlbumDetails key={album.title} album={album} />
      );
    });
  }

  render() {
    const { viewStyle, textStyle } = styles;
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}


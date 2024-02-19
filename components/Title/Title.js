import React from 'react';
import PropTypes from 'prop-types';
import {getFontFamily} from '../../assets/fonts/inter/helper';
import {Text} from 'react-native';
import style from './style';

const Title = props => {
  return <Text style={style.title}>{props.title}</Text>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;

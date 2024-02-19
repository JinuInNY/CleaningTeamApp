import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import style from './style';
import UserProfiles from '../UserProfiles/UserProfile';

const UserStory = props => {
  return (
    <View style={style.storyContainer}>
      <UserProfiles profileImage={props.profileImage} imageDimensions={30} />
      <Text style={style.firstName}>{props.firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.any.isRequired,
};

export default UserStory;

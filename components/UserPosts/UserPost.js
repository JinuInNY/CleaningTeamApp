import React from 'react';
import PropTypes from 'prop-types';
import {Image, LocalSvg} from 'react-native-svg';
import {View} from 'react-native';
import UserProfiles from '../UserProfiles/UserProfile';
const UserPost = props => {
  return (
    <View>
      <View>
        <UserProfiles profileImage={props.profileImage} imageDimensions={48} />
      </View>
    </View>
  );
};

UserPost.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string,
  image: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
  profileImage: PropTypes.any.isRequired,
};

export default UserPost;

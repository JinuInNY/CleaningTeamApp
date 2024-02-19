import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import UserProfiles from '../UserProfiles/UserProfile';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons';
import {
  faHeart,
  faMessage,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';

import style from './style';

const UserPost = props => {
  return (
    <View>
      <View style={style.user}>
        <View style={style.userContainer}>
          <UserProfiles
            profileImage={props.profileImage}
            imageDimensions={48}
          />
          <View style={style.userTextContainer}>
            <Text style={style.uerName}>
              {props.firstName} {props.lastName}
            </Text>
            {props.location && (
              <Text style={style.location}> {props.location}</Text>
            )}
          </View>
        </View>
        <FontAwesomeIcon icon={faEllipsis} size={14} color={'#97869F'} />
      </View>
      <View style={style.postImage}>
        <Image source={props.image} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 20,
          paddingBottom: 20,
          borderBottomWidth: 1,
          borderBottomColor: '#EFF2F6',
        }}>
        <View style={{flexDirection: 'row', marginLeft: 15}}>
          <FontAwesomeIcon icon={faHeart} color="#79869F" />
          <Text style={{marginLeft: 5, color: '#79869F'}}>{props.likes}</Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 15}}>
          <FontAwesomeIcon icon={faMessage} color="#79869F" />
          <Text style={{marginLeft: 5, color: '#79869F'}}>{props.likes}</Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 15}}>
          <FontAwesomeIcon icon={faBookmark} color="#79869F" />
          <Text style={{marginLeft: 5, color: '#79869F'}}>{props.likes}</Text>
        </View>
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

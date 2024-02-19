import React from 'react';
import {View, Image} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';
const UserProfiles = props => {
  return (
    <View style={[style.imageContainer, {borderRadius: props.imageDimensions}]}>
      <Image
        source={props.profileImage}
        style={{width: props.imageDimensions, height: props.imageDimensions}}
      />
    </View>
  );
};

UserProfiles.propTypes = {
  image: PropTypes.any.isRequired,
  imageDimensions: PropTypes.number.isRequired,
};

export default UserProfiles;

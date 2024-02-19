import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/inter/helper';

const style = StyleSheet.create({
  userContainer: {flexDirection: 'row', marginLeft: 15, marginTop: 10},
  userTextContainer: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  uerName: {
    color: '#000',
    fontFamily: getFontFamily('Inter', 600),
    fontSize: 16,
  },
  location: {
    color: '#79869F',
    fontFamily: getFontFamily('Inter', 400),
    fontSize: 12,
    marginTop: 5,
  },
  postImage: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});

export default style;

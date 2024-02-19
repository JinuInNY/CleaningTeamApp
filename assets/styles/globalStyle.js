import {StyleSheet} from 'react-native';
import {getFontFamily} from '../fonts/inter/helper';

const globalStyle = StyleSheet.create({
  header: {
    marginLeft: 27,
    marginRight: 17,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {padding: 14, borderRadius: 100, backgroundColor: '#F9FAF3'},
  messagecNumContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 20,
    height: 20,
    borderRadius: 10,
    position: 'absolute',
    right: 2,
    top: 5,
  },
  messageNum: {
    color: '#FFFFFF',
    fontSize: 10,
    fontFamily: getFontFamily('Inter', '600'),
  },
});

export default globalStyle;

import { StyleSheet } from 'react-native';
import { width } from 'constants/constants';

const SIZE = 2;

export const styles = StyleSheet.create({
  container: {
    marginTop: 6,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  seek: {
    top: -6,
    backgroundColor: '#B3A497',
    borderRadius: 10,
    height: SIZE + 12,
    width: SIZE + 12,
    position: 'absolute',
    borderWidth: 2,
    borderColor: '#FFFBF1',
  },
  time: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width * 0.8,
    marginTop: 12,
    marginBottom: 16,
  },
  seekBar: {
    height: SIZE,
    borderColor: '#004ebb',
    borderWidth: 1,
    width: width * 0.8,
    borderRadius: 6
  },
  text: {
    fontSize: 16,
    color: 'black'
  }
});
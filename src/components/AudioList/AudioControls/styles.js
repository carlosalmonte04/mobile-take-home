import { StyleSheet } from 'react-native';
import { width, IMAGE_SIZE } from '../../../constants/constants';

export const styles = StyleSheet.create({
  container: {
    width,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
  },
  overlay: {
    position: 'absolute',
    opacity: 0.5,
    backgroundColor: '#262527',
    height: IMAGE_SIZE,
    width,
  },
  playBtnContainer: {
    // position: 'absolute',
    // flex: 0.6,
  },
  playTriangle: {
    position: 'absolute',
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 125 / 3.8,
    borderRightWidth: 125 / 3.8,
    borderBottomWidth: (125 / 3.8) * 2,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#000B14',
    right: 25,
    top: 30,
    transform: [{ rotate: '90deg' }],
  },
  playCircle: {
    height: 125,
    width: 125,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#D7D3DB',
  },
  skip: {
    minWidth: 40,
    fontSize: 16,
    color: 'white'
  }
});
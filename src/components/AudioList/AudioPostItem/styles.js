import { StyleSheet } from 'react-native';
import { width, StatusBarHeight } from 'constants/constants';
import { IMAGE_SIZE } from '../styles';

export const styles = StyleSheet.create({
  post: {
    marginTop: 24,
    borderTopColor: '#ACACB8',
    paddingTop: 18,
    backgroundColor: '#FFFBF4'
  },
  postTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8
  },
  postTitle: {
    fontSize: 16,
    letterSpacing: 0.8
  },
  postAuthor: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  artwork: {
    flex: 0.5,
    height: IMAGE_SIZE,
    width: width,
    bottom: StatusBarHeight,
    marginTop: 36,
  },
  imageBtnsContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
})
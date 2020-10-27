import { StyleSheet } from 'react-native';

import { StatusBarHeight, height, width } from 'constants/constants.js';  

export const IMAGE_SIZE = height / 2.5;
export const IMAGE_CONTAINER_SIZE = IMAGE_SIZE + 36;
/* 
  IMAGE_CONTAINER_SIZE
    + POST_PADDING_TOP
    + POST_MARGIN_TOP

    + SEEK_BAR_HEIGHT (SeekBar.js)
    + SEEK_BAR_MARGIN_TOP (SeekBar.js)
    + SEEK_BAR_TIME_MARGIN_TOP (SeekBar.js)

    + POST_TOP_BORDER
    + TITLE_TEXT_SIZE
    + TIME_TEXT_SIZE
*/
export const POST_CONTAINER_SIZE =
  IMAGE_CONTAINER_SIZE
  + 18
  + 24

  + 2
  + 0.5
  + 6

  + 12
  + 16
  + 19.7
  + 19.7

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2E2D0'
  },
  header: {
    backgroundColor: '#F2E2D0',
    alignItems: 'center',
    paddingTop: StatusBarHeight * 2,
    paddingBottom: StatusBarHeight,
  },
  footer: {
    height: POST_CONTAINER_SIZE,
    backgroundColor: '#F2E2D0',
    alignItems: 'center',
    paddingTop: StatusBarHeight * 2,
    paddingBottom: StatusBarHeight,
  },
  title: {
    fontFamily: 'Helvetica',
    fontSize: 22,
    letterSpacing: 1.2,
    marginTop: StatusBarHeight
  },
  subtitle: {
    top: 4,
    color: '#3F3B37',
    letterSpacing: 1.2,
    fontFamily: 'Helvetica',
  },
  flatListContainer: {
    overflow: 'visible',
  },

})
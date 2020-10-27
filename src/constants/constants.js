import { Dimensions, Platform, StatusBar } from 'react-native';

const X_WIDTH = 375;
const X_HEIGHT = 812;
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;
export const { height, width } = Dimensions.get('window');

export const isIPhoneX = () => Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS
    ? width === X_WIDTH && height === X_HEIGHT || width === XSMAX_WIDTH && height === XSMAX_HEIGHT
    : false;

export const StatusBarHeight = Platform.select({
    ios: isIPhoneX() ? 44 : 20,
    android: StatusBar.currentHeight,
    default: 0
})

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


String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}
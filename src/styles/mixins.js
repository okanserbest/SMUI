import {Dimensions, PixelRatio} from 'react-native';
export const FULL_SW = Dimensions.get('window').width;
export const FULL_SH = Dimensions.get('window').height;

export const SW = FULL_SW / 375;
export const SH = FULL_SH / 812;
export const scaleFont = size => size * PixelRatio.getFontScale();


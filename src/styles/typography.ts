import {StyleSheet, TextStyle} from 'react-native';
import {scaleFont} from './mixins';

interface TypographyStyle {
  title: TextStyle;
  h1: TextStyle;
  h2: TextStyle;
  h2Regular: TextStyle;
  h3: TextStyle;
  bodyRegular: TextStyle;
  bodySmall: TextStyle;
  captions: TextStyle;
  buttonRegular: TextStyle;
  buttonLarge: TextStyle;
}

export default StyleSheet.create<TypographyStyle>({
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: scaleFont(39),
    alignSelf: 'flex-start',
    textAlign: 'left',
    textAlignVertical: 'top',
  },
  h1: {
    fontFamily: 'Poppins-Bold',
    fontSize: scaleFont(31.25),
    alignSelf: 'flex-start',
    textAlign: 'left',
    textAlignVertical: 'top',
  },
  h2: {
    fontFamily: 'Poppins-Bold',
    fontSize: scaleFont(25),
    alignSelf: 'flex-start',
    textAlign: 'left',
    textAlignVertical: 'top',
  },
  h2Regular: {
    fontFamily: 'Poppins-Regular',
    fontSize: scaleFont(25),
    alignSelf: 'flex-start',
    textAlign: 'left',
    textAlignVertical: 'top',
  },
  h3: {
    fontFamily: 'Poppins-Regular',
    fontSize: scaleFont(20),
    alignSelf: 'flex-start',
    textAlign: 'left',
    textAlignVertical: 'top',
  },
  bodyRegular: {
    fontFamily: 'Poppins-Regular',
    fontSize: scaleFont(16),
    alignSelf: 'flex-start',
    textAlign: 'left',
    textAlignVertical: 'top',
  },
  bodySmall: {
    fontFamily: 'Poppins-Regular',
    fontSize: scaleFont(14),
    alignSelf: 'flex-start',
    textAlign: 'left',
    textAlignVertical: 'top',
  },
  captions: {
    fontFamily: 'Poppins-Regular',
    fontSize: scaleFont(12.8),
    alignSelf: 'flex-start',
    textAlign: 'left',
    textAlignVertical: 'top',
  },
  buttonRegular: {
    fontFamily: 'Poppins-Regular',
    fontSize: scaleFont(16),
    alignSelf: 'flex-start',
    textAlign: 'left',
    textAlignVertical: 'top',
  },
  buttonLarge: {
    fontFamily: 'Poppins-Regular',
    fontSize: scaleFont(20),
    alignSelf: 'flex-start',
    textAlign: 'left',
    textAlignVertical: 'top',
  },
});

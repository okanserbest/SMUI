import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {SH, SW} from './mixins';
import colors from './colors';

interface globalStyleType {
  container:ViewStyle
  marginTop:ViewStyle
  marginContainerLeft:ViewStyle
  marginContainerRight:ViewStyle
  marginContainerTop:ViewStyle
  marginContainerBottom:ViewStyle
  marginContainerHorizontal:ViewStyle
  marginContainerVertical:ViewStyle
  marginItemRight:ViewStyle
  marginItemLeft:ViewStyle
  marginItemTop:ViewStyle
  marginItemBottom:ViewStyle
}

export default StyleSheet.create<globalStyleType>({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  marginTop: {
    marginTop: 12.3 * SH,
  },
  marginContainerLeft: {
    marginLeft: 16 * SW,
  },
  marginContainerRight: {
    marginRight: 16 * SW,
  },
  marginContainerTop: {
    marginTop: 13.5 * SH,
  },
  marginContainerBottom: {
    marginBottom: 13.5 * SH,
  },
  marginContainerHorizontal: {
    marginHorizontal: 13.5 * SH,
  },
  marginContainerVertical: {
    marginVertical: 16 * SW,
  },
  marginItemLeft: {
    marginLeft: 8 * SW,
  },
  marginItemRight: {
    marginRight: 8 * SW,
  },
  marginItemTop: {
    marginTop: 6.56 * SH,
  },
  marginItemBottom: {
    marginBottom: 6.56 * SH,
  },
});

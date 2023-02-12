import { ImageStyle, ViewStyle } from "react-native/types"
import { StyleSheet } from 'react-native';
import colors from "../../styles/colors"
import { FULL_SH, FULL_SW, SH, SW } from "../../styles"
import typographies from "../../styles/typography"
import { Button } from "react-native/Libraries/Components/Button";


interface globalStyleType {
  bgImage:ImageStyle
  backImage:ImageStyle
}

export default StyleSheet.create<globalStyleType>({
  bgImage: {
    position: "absolute",
    width: FULL_SW,
    height: FULL_SH,
  },
  backImage:{
    resizeMode: 'contain',
    width: 19.71 * SW,
    height: 19.71 * SH,
  },
  
});
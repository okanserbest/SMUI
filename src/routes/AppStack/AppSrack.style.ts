import { ImageStyle, ViewStyle } from "react-native/types"
import { StyleSheet } from 'react-native';
import colors from "../../styles/colors"
import { FULL_SH, FULL_SW, SH, SW } from "../../styles"
import typographies from "../../styles/typography"
import { Button } from "react-native/Libraries/Components/Button";


interface globalStyleType {
  tabBarStyle:ViewStyle
  tabBarIconImage: ImageStyle
  tabBarIconImageAdd: ImageStyle
  tabBarIconContainer:ViewStyle

}

export default StyleSheet.create<globalStyleType>({
  tabBarStyle:{
    position: 'absolute',
    height: 82.88 * SH,
    // border:20*SH,
    // borderRadius:20*SH,
    borderTopLeftRadius: 20 * SH,
    borderTopRightRadius: 20 * SH,
  },
  tabBarIconImage: {
    resizeMode: 'contain', 
    width: 18 * SW, 
    height: 18 * SW
  },
  tabBarIconImageAdd: {
    resizeMode: 'contain', 
    width: 80 * SW, 
    height: 80 * SW,
    top:-20*SW
  },
  tabBarIconContainer:{
    alignItems:"center",
    justifyContent:"center"
  }
});
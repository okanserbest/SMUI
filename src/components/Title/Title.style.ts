import { ImageStyle, ViewStyle } from "react-native/types"
import { StyleSheet } from 'react-native';
import colors from "../../styles/colors"
import { FULL_SH, FULL_SW, SH, SW } from "../../styles"
import typographies from "../../styles/typography"
import { Button } from "react-native/Libraries/Components/Button";


interface globalStyleType {
  container:ViewStyle
  text:ViewStyle

}

export default StyleSheet.create<globalStyleType>({
  container:{
    height:38*SH,
    width:'auto',
    marginTop:52.93*SH,
    marginLeft:25.41*SW,
    alignItems: 'center',
  },
  text:{
    color:colors.black
  }

});
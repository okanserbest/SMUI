import { ImageStyle, ViewStyle } from "react-native/types"
import { StyleSheet } from 'react-native';
import colors from "../../styles/colors"
import { FULL_SH, FULL_SW, SH, SW } from "../../styles"
import typographies from "../../styles/typography"
import { Button } from "react-native/Libraries/Components/Button";


interface globalStyleType {
  container:ViewStyle
  leftComponent:ViewStyle
  rightComponent:ViewStyle
  leftImage:ImageStyle

}

export default StyleSheet.create<globalStyleType>({
  container:{
    height:24*SH,
    width:'auto',
    marginTop:49.93*SH,
    marginLeft:37.63*SW,
    marginRight:40*SW,
    flexDirection:"row",
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  leftComponent:{
    justifyContent:"center",
    
  },
  rightComponent:{
    justifyContent:"center",
  },
  leftImage:{
    resizeMode: 'contain',
    width: 19.71 * SW,
    height: 19.71 * SH,
  },

});
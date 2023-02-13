import { ImageStyle, ViewStyle } from "react-native/types"
import { StyleSheet } from 'react-native';
import colors from "../../styles/colors"
import { FULL_SH, FULL_SW, SH, SW } from "../../styles"
import typographies from "../../styles/typography"
import { Button } from "react-native/Libraries/Components/Button";


interface globalStyleType {
  bgImage:ImageStyle
  backImage:ImageStyle
  inputIconStyle:ImageStyle
  inputContainer:ViewStyle
  inputStyle:ViewStyle
  listContainer:ViewStyle

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
  inputContainer:{
    marginTop:29*SH,
    marginLeft:15*SW,
    flexDirection:"row",
    alignContent:"center",
    height:48*SH,
  },
  inputIconStyle:{
    resizeMode: 'contain',
    width: 19.71 * SW,
    height: 19.71 * SH,
    zIndex:55,
    left:35*SW,
    top:15*SH,
  },
  inputStyle:{
    width:288*SW,
    height:48*SH,
    paddingLeft:57*SW,
    borderRadius:15*SW,
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 4*SH,
      width: 0,
    },
    elevation: 25,
    shadowColor:colors.black,
    backgroundColor:colors.white
  },
  listContainer:{
    width:"100%",
    height:515*SH,
    marginTop:30*SH,
  }
  
});
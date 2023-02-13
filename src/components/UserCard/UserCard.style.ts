import { ImageStyle, TextStyle, ViewStyle } from "react-native/types"
import { StyleSheet } from 'react-native';
import colors from "../../styles/colors"
import { FULL_SH, FULL_SW, SH, SW } from "../../styles"
import typographies from "../../styles/typography"


interface globalStyleType {
  container:ViewStyle
  imageContainer:ViewStyle
  profileImage:ImageStyle
  textContainer:ViewStyle
  textName:TextStyle
  textMessage:TextStyle
}

export default StyleSheet.create<globalStyleType>({
  container:{
    height:103.45*SH,
    width:328*SW,
    marginBottom:16*SH,
    marginLeft:24*SW,
    backgroundColor:'rgba(255, 255, 255, 0.6)',
    borderRadius:33*SW,
    flexDirection:"row",
  },

  imageContainer:{
    justifyContent:"center",
  },
  
  profileImage:{
    resizeMode: 'contain',
    width: 95 * SW,
    height: 95 * SH,
  },
  textContainer:{
    marginTop:15.89*SH
  },
  textName:{
    ...typographies.captions,
    marginBottom:9*SH,
    color:colors.black

  },
  textMessage:{
    ...typographies.captions,
    color:"rgba(101, 101, 101, 1)",
    width:187*SW
    
  }



});
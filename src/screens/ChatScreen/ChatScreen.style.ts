import { ImageStyle, TextStyle, ViewStyle} from "react-native/types"
import { StyleSheet } from 'react-native';
import colors from "../../styles/colors"
import { FULL_SH, FULL_SW, SH, SW } from "../../styles"
// import typographies from "./../"
import typography from "../../styles/typography";

interface globalStyleType {
  bgImage: ImageStyle
  otherUser: ViewStyle
  profilePicture: ImageStyle
  otherUserTextContainer:ViewStyle
  otherUserName:TextStyle
  otherUserStatus:TextStyle
  messageListContainer:ViewStyle
  messageSendContainer:ViewStyle
  messageContainerRight:ViewStyle
  messageContainerLeft:ViewStyle
  messageTextLeft:TextStyle
  messageTextRight:TextStyle
  inputStyle:ViewStyle
  sendIcon:ImageStyle
}

export default StyleSheet.create<globalStyleType>({
  bgImage: {
    position: "absolute",
    width: FULL_SW,
    height: FULL_SH,
  },
  otherUser: {
    marginTop: 33.21 * SH,
    marginLeft: 33.67 * SW,
    flexDirection: "row",
  },
  profilePicture: {
    resizeMode: 'contain',
    width: 109.81 * SW,
    height: 109.81 * SH,
  },
  otherUserTextContainer:{
      marginLeft:20.26*SW,
      justifyContent:"center"
  },
  otherUserName:{
    ...typography.h3,
    color:colors.black
  },
  otherUserStatus:{
    ...typography.captions,
    color:'rgba(101, 101, 101, 1)'
  },
  messageListContainer: {
    height: 450*SH,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end',
   
  },
  messageSendContainer: {
    height: 130*SH,
    justifyContent: 'space-between',
    flexDirection: 'row',
    // alignItems: 'flex-end',
   
  },
  messageContainerRight: {
    alignSelf: 'flex-end',
    borderTopLeftRadius: 15 * SW,
    borderTopRightRadius: 15 * SW,
    borderBottomLeftRadius: 15 * SW,
    backgroundColor: 'rgba(250, 250, 250, 1)',
    // width: '30%',
    marginTop: 16 * SH,
    maxWidth: '70%',
    minWidth: '40%',
    paddingHorizontal:32.42*SW,
    paddingVertical:10.74*SH,
    marginBottom:16*SH,
    marginRight:14.58*SW

    // marginTop: 7 * SH,
    // marginRight: 10 * SW,
    // paddingVertical: 5 * SH,
  },
  messageContainerLeft: {
    alignSelf: 'flex-start',
    borderTopRightRadius: 15 * SW,
    borderBottomRightRadius: 15 * SW,
    borderBottomLeftRadius: 15 * SW,
    backgroundColor: 'rgba(250, 250, 250, 1)',
    maxWidth: '70%',
    minWidth: '40%',
    marginTop: 16 * SH,
    marginLeft: 14.58*SW,
    paddingHorizontal:32.42*SW,
    paddingVertical:10.74*SH,
    // marginBottom:16*SH
  },
  messageTextLeft: {
    color: 'rgba(101, 101, 101, 1)',
    ...typography.captions
  },
  messageTextRight: {
    color: "rgba(101, 101, 101, 1)",
    ...typography.captions
  },
  inputStyle:{
    width:296*SW,
    height:60*SH,
    paddingLeft:40.41*SW,
    borderRadius:60*SH,
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 4*SH,
      width: 0,
    },
    elevation: 25,
    shadowColor:colors.black,
    backgroundColor:colors.white,
    
    marginLeft:  40*SW
  },
  sendIcon: {
    resizeMode: 'contain',
    width: 70 * SW,
    height: 70 * SW,
    right: 80*SW,
    bottom:3*SW,
    
  }

});
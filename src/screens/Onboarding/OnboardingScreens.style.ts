import { ImageStyle, ViewStyle } from "react-native/types"
import { StyleSheet } from 'react-native';
import colors from "../../styles/colors"
import { FULL_SH, FULL_SW, SH, SW } from "../../styles"
import typographies from "../../styles/typography"
import { Button } from "react-native/Libraries/Components/Button";


interface globalStyleType {
  slide: ViewStyle
  slideTitleArea: ViewStyle
  welcomeText: ViewStyle
  mainText: ViewStyle
  slideImageArea: ViewStyle
  image: ImageStyle
  bg: ViewStyle
  bgImage: ImageStyle
  dotContainer: ViewStyle
  buttonNextContainer: ViewStyle
  buttonNextRectangle1:ViewStyle
  dots: ImageStyle

  buttonNextImage: ImageStyle

  dot(scrollX: any, index: number): any

}

export default StyleSheet.create<globalStyleType>({
  slide: {
    width: FULL_SW,
    height: FULL_SH,
    backgroundColor: colors.white,
  },
  slideTitleArea: {
    marginTop: 114 * SH,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    ...typographies.bodyRegular,
    color: colors.gray,
    alignSelf: 'center',
  },
  mainText: {
    ...typographies.title,
    color: colors.black,
    alignSelf: 'center',
  },
  slideImageArea: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 57 * SH
  },
  image: {
    resizeMode: 'cover',
    height: 256 * SH,
    width: 314 * SW,
  },
  bg: {

  },
  bgImage: {
    position: "absolute",
    width: FULL_SW,
    height: FULL_SH,
  },
  dotContainer: {
    justifyContent: "center",
    alignItems: 'center',
    marginTop: 51 * SH,
  },
  dots: {
    resizeMode: 'contain',
    height: 20 * SH,
    width: 60 * SW,
    paddingLeft: 55 * SW
  },
  buttonNextContainer: {
    position: "absolute",
    width: 366.02 * SW,
    height: 366.02 * SW,
    left: 109.17 * SW,
    top: 55.8 * SH,
    /* Black */

    background: "#000000",
    borderRadius: 79 * SW,
    // transform: ,
    // transform: [{ rotate: '-45deg' }]
    // transform: rotate(-45deg),
  },
  buttonNextRectangle1: {
    position: "absolute",
    left: "96.92%",
    right: "-61.41%",
    top: "51.06%",
    bottom: "-17.38%",

    /* Black */
    background: "#000000",
    borderRadius: 79* SW,
  // transform: rotate(134.51deg);
  },
  buttonNextImage: {
  resizeMode: 'contain',
  position: "absolute",
  width: 366.02 * SW,
  height: 366.02 * SH,
  right: 0,
  top:FULL_SH-366.02 * SW
},
  buttonNextText: {

},

  dot: (scrollX, index) => {
    const inputRange = [
      (index - 2) * FULL_SW,
      (index - 1) * FULL_SW,
      index * FULL_SW,
      (index + 1) * FULL_SW,
      (index + 2) * FULL_SW,
    ];
    const outputRange = [0.6, 0.6, 1, 0.6, 0.6];
    return {
      marginHorizontal: 10,
      width: 10 * SW,
      height: 10 * SW,
      borderRadius: 10 * SW,
    }
    // return {
    //   marginHorizontal: 10,
    //   width: 10 * SW,
    //   height: 10 * SW,
    //   borderRadius: 10 * SW,
    //   backgroundColor: scrollX.interpolate({
    //     inputRange,
    //     outputRange: ['#DDE4FE', '#DDE4FE', '#536DFE', '#DDE4FE', '#DDE4FE'],
    //   }),

    //   opacity: scrollX.interpolate({
    //     inputRange,
    //     outputRange,
    //     extrapolate: 'clamp',
    //   }),
    //   transform: [
    //     {
    //       scale: scrollX.interpolate({
    //         inputRange,
    //         outputRange,
    //         extrapolate: 'clamp',
    //       }),
    //     },
    //   ],
    // };
  },
});
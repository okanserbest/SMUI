import * as React from 'react';
import { useState } from 'react';
import { View, Text, SafeAreaView, Animated, Image, ImageSourcePropType, TouchableOpacity } from 'react-native';
import { FULL_SW } from '../../styles';
import style from "./OnboardingScreens.style"
import Buttons from './OnboardingScreensButtons';
import images from '../../assents/images';


export interface OnboardingProps {
  navigation:any
}

export interface OnboardingItemProps {
  item: {
    welcome: String
    text: String
    image: ImageSourcePropType
    isDone?:boolean
  }
  scrollX: any
  navigation:any

}
const slides = [
  {
    key: 1,
    welcome: "Welcome to",
    text: "Socially",
    image: images.onBoarding.heroImg,
  },
  {
    key: 2,
    welcome: "Welcome to",
    text: "Socially",
    image: images.onBoarding.heroImg
  },
  {
    key: 3,
    welcome: "Welcome to",
    text: "Socially",
    image: images.onBoarding.heroImg,
    isDone: true
  },
];

const _renderItem = ( {item,navigation} : OnboardingItemProps) => {
  console.log("item",item)
  console.log("navigation",navigation)
  return (
    <View style={style.slide}>
      <Image style={style.bgImage} source={images.bg.onBoarding} />
      <TouchableOpacity
      onPress={()=>{
        console.log("item.isDone",item.isDone)
        if(item.isDone){

          console.log("isDone")
          navigation.reset({
            index: 0,
            routes: [
              {
                name: 'App',
                params: {
                  screen: 'home',
                  params: null,
                },
              },
            ],
          });


          // navigation.navigate('AddFirstProduct');
        }
      }}
      style={style.buttonNextContainer} >
            {/* <View style={style.buttonNextRectangle1}/> */}
              
          <Image
            style={style.buttonNextImage}
            source={item.isDone? images.onBoarding.buttonDone:images.onBoarding.buttonNextBlack}/>
      </TouchableOpacity>


      {/* <View style={style.bg}>
      </View> */}
      <View style={style.slideTitleArea}>
        <View>
          <Text style={style.welcomeText}>{item.welcome}</Text>
          <Text style={style.mainText}>{item.text}</Text>
        </View>

      </View>
      <View style={style.slideImageArea}>
        <Image
          style={style.image}
          source={item.image}
          // resizeMode={FastImage.resizeMode.contain}
          />
      </View>
      <View style={style.dotContainer}>
          <Image
            style={style.dots}
            source={images.onBoarding[`dot${item.key}`]}/>
      </View>
    </View>
  );
};

const Onboarding = ({navigation}: OnboardingProps) => {
  console.log("Onboarding")
  const [getIndex, setIndex] = useState<Number>(0);

  const scrollRef = React.useRef();
  const scrollX = React.useRef(new Animated.Value(0)).current;




  const doneSlider = async () => {
    console.log("doneSlider")
    // await AsyncStorage.setItem('@isFirst', 'true');
    // props.navigation.reset({
    //   index: 0,
    //   routes: [
    //     {
    //       name: 'Auth',
    //       params: {
    //         screen: 'SignIn',
    //         params: props?.route?.params || null,
    //       },
    //     },
    //   ],
    // });
  };

  const onScrollToIndex = (index: any) => {
    setIndex(index);
  }
  // const onScrollToIndex = useCallback((index:number):void => {
  //   scrollRef?.current?.scrollToIndex({
  //     index,
  //   });
  //   setIndex(index);
  // },[]);
  console.log("scrollX", scrollX)

  return (
    <SafeAreaView>
      <Animated.FlatList
        ref={scrollRef}
        horizontal
        onScroll={Animated.event(
          // scrollX = e.nativeEvent.contentOffset.x
          [{
            nativeEvent: {
              contentOffset: {
                x: scrollX
              }
            }
          }]
        )}
        keyExtractor={(i, index) => index.toString()}
        pagingEnabled
        data={slides}
        onMomentumScrollEnd={({
          nativeEvent: {
            contentOffset: { x },
          },
        }) => setIndex(Math.round(x / FULL_SW))}
        showsHorizontalScrollIndicator={false}
        renderItem={(item) => _renderItem({...item,navigation}, scrollX, slides)}
      />
      {/* <Text>TEst </Text>  */}
      <Buttons
        scrollX={scrollX}
        getIndex={getIndex}
        slides={slides}
        onScrollToIndex={onScrollToIndex}
        doneSlider={doneSlider}
      />

    </SafeAreaView>
  );
}
export default Onboarding
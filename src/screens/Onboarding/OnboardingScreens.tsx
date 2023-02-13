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
  return (
    <View style={style.slide}>
      <Image style={style.bgImage} source={images.bg.onBoarding} />
      <TouchableOpacity
      onPress={()=>{ 
        if(item.isDone){
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
        }
      }}
      style={style.buttonNextContainer} >
              
          <Image
            style={style.buttonNextImage}
            source={item.isDone? images.onBoarding.buttonDone:images.onBoarding.buttonNextBlack}/>
      </TouchableOpacity>


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
  const [getIndex, setIndex] = useState<Number>(0);

  const scrollRef = React.useRef();
  const scrollX = React.useRef(new Animated.Value(0)).current;




  const doneSlider = async () => {
    // await AsyncStorage.setItem('@isFirst', 'true');
    // props.navigation.reset({
    //   index: 0,
    //   routes: [
    //     {
    //       name: 'App',
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
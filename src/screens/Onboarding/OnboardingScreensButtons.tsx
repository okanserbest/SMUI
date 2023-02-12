import React from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import styles from "./OnboardingScreens.style"

interface OnboardingButtonProps {
    scrollX: any
    getIndex: any
    slides: any
    onScrollToIndex: any
    doneSlider: any

}

const Buttons = ({ scrollX, getIndex, slides, onScrollToIndex, doneSlider }: OnboardingButtonProps) => {
    return (
        <View style={styles.dotContainer}>
                  <View style={styles.dots}>
        {slides.map((_, index) => (
          <Animated.View key={index} style={styles.dot(scrollX, index)} />
        ))}
      </View>
        </View>
    );
};

export default Buttons;

import * as React from 'react';
import { View, Text, Image } from 'react-native';
import image from '../../assents/images';
import { FULL_SH, FULL_SW } from '../../styles';

export interface ProfileScreenProps {
}

export function ProfileScreen(props: ProfileScreenProps) {
  return (
    <View>
      <Image 
      source={image.screen.profile} 
      style={{ height: FULL_SH, width: FULL_SW }} />
      {/* <Text>ProfileScreen</Text> */}
    </View>
  );
}

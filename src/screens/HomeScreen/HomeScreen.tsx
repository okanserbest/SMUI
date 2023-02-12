import * as React from 'react';
import { View, Text, Image } from 'react-native';
import image from '../../assents/images';
import { FULL_SH, FULL_SW } from '../../styles';

export interface HomeScreenProps {
}

export function HomeScreen(props: HomeScreenProps) {
    return (
        <View>
            <Image
                source={image.screen.homepage}
                style={{ height: FULL_SH, width: FULL_SW }} />
        </View>
    );
}

import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import image from '../../assents/images';
import styles from './Title.style'
import typography from '../../styles/typography';



export interface TitleProps {
    title: string
}

export function Title({ title }: TitleProps) {
    console.log("Title", title)
    return (
        <View style={styles.container}>
            <Text style={[typography.h2,styles.text]}>{title}</Text>

        </View>
    );
}

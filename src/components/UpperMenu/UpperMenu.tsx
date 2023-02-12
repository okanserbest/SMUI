import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import image from '../../assents/images';
import styles from './UpperMenu.style'



export interface UpperMenuProps {
    rightIcon?: "back" | "add" |"notif" |"hamburgerMenu"
    leftIcon?: "back" | "add" |"notif" |"hamburgerMenu"
    leftText?: string
    leftOnPress?:any
    rightOnPress?:any
}

export function UpperMenu({ rightIcon, leftIcon, leftText,leftOnPress ,rightOnPress}: UpperMenuProps) {
    return (
        <View style={styles.container}>
            <View style={styles.leftComponent}>
                {leftIcon && (
                    <TouchableOpacity onPress={()=>leftOnPress && leftOnPress()}>
                        <Image style={styles.leftImage} source={image.icon[leftIcon]} />
                    </TouchableOpacity>
                )}
                {leftText && (
                    <Text>{leftText}</Text>
                )}
            </View>
            <View style={styles.rightComponent}>
                {rightIcon && (
                    <TouchableOpacity  onPress={()=>rightOnPress && rightOnPress()} > 
                        <Image style={styles.leftImage} source={image.icon[rightIcon]} />
                    </TouchableOpacity>
                )}
            </View>


        </View>
    );
}

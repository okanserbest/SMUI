import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import image from '../../assents/images';
import styles from './UserCard.style'
import { UserMessagesType } from '../../redux/initialState/messagesInitialState';
import {useNavigation} from '@react-navigation/core';



export interface UserCardProps {
    onPress?:any
    user:UserMessagesType
}

export function UserCard({ onPress, user }: UserCardProps) {

    const lastMessage=  user.messages[user.messages.length - 1].message;
    const navigation = useNavigation()
    return (
        <>
        <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('Chat', {userId:user.userId})}>
            <View style={styles.imageContainer}>
                <Image style={styles.profileImage} source={image.user[`profile${user.userId}`]} />
                  
            </View>
            <View style={styles.textContainer}>
                <Text style={[styles.textName ]} >{user.userName}</Text>
                <Text style={styles.textMessage}>{lastMessage}</Text>
                
            </View>
        </TouchableOpacity>
        </>
    );
}

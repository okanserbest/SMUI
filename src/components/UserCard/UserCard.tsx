import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import image from '../../assents/images';
import styles from './UserCard.style'
import { UserMessagesType } from '../../redux/initialState/messagesInitialState';




export interface UserCardProps {
    onPress?:any
    user:UserMessagesType
}

export function UserCard({ onPress, user }: UserCardProps) {

    const lastMessage=  user.messages[user.messages.length - 1].message;

    return (
        <>
        <TouchableOpacity style={styles.container} onPress={()=>console.log("user",user)}>
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

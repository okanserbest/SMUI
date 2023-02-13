import * as React from 'react';
import {
  View, Text, Image, KeyboardAvoidingView,
  FlatList, TextInput, SafeAreaView, Platform,
  TouchableWithoutFeedback, Keyboard, TouchableOpacity
} from 'react-native';
import styles from "./ChatScreen.style"
import image from '../../assents/images';
import { UpperMenu } from '../../components/UpperMenu/UpperMenu';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { UserMessagesType } from '../../redux/initialState/messagesInitialState';
import { useCallback } from 'react';
import typography from '../../styles/typography';
import {newSendMessage } from '../../redux/actions/messages'

export interface ChatScreenProps {
  route: any
}

export function ChatScreen({ route }: ChatScreenProps) {
  const [newMessage, setNewMessage] = React.useState<string>("")
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { userId } = route?.params;

  const user: UserMessagesType = useSelector(state => state.message.find(user => user.userId === userId));


  const renderItem = useCallback(
    ({ item, index }) => {
      const areYouSend = item.senderID === 0
      return (
        <View style={areYouSend ? styles.messageContainerRight : styles.messageContainerLeft} >
          <Text style={areYouSend ? styles.messageTextRight : styles.messageTextLeft}>
            {item.message}
          </Text>
        </View>
      )
    },
    [user],
  );
  const sentMessage=()=>{
    dispatch(newSendMessage({newMessage, userId:user.userId}))
    setNewMessage("")
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }} >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>

            <Image source={image.bg.chat} style={styles.bgImage} />
            <UpperMenu leftIcon='back' leftOnPress={() => navigation.goBack()} />
            <View style={styles.otherUser} >
              <Image source={image.user[`profile${user.userId}`]} style={styles.profilePicture} />
              <View style={styles.otherUserTextContainer}>
                <Text style={styles.otherUserName}>{user.userName}</Text>
                <Text style={styles.otherUserStatus}>Online</Text>
              </View>
            </View>
            <View style={styles.messageListContainer}>
              <FlatList data={user.messages} renderItem={renderItem} keyExtractor={item => item.message} />
            </View>
            <View style={styles.messageSendContainer}>
              <TextInput style={[styles.inputStyle, typography.captions]} value={newMessage} onChangeText={text => setNewMessage(text)} placeholder='Write a message...' />
              {newMessage.length > 0 && (
                <TouchableOpacity onPress={()=>sentMessage()}>
                  <Image source={image.icon.send} style={styles.sendIcon} />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

import  React,{useCallback, useState} from 'react';
import { View, Text ,TouchableOpacity, Image, KeyboardAvoidingView,TextInput,FlatList} from 'react-native';
import { UpperMenu } from '../../components/UpperMenu/UpperMenu';
import image from '../../assents/images';
import styles from './MessagingScreens.style'
import { Title } from '../../components/Title/Title';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import typography from '../../styles/typography';
import { UserCard } from '../../components/UserCard/UserCard';
export interface MessagingScreenProps {
}


export function MessagingScreen ({}: MessagingScreenProps) {
    const [filter,setFilter]= useState<string>("")

    const navigation = useNavigation();
    
    const messages = useSelector(state => state.message);

    const renderItem = useCallback(
        ({item, index}) => (
          <UserCard user={item}  />
        ),
        [messages],
      );


    return (
      <KeyboardAvoidingView>
         <View>
            <Image style={styles.bgImage} source={image.bg.conversations} />
         </View>
         
         <UpperMenu leftIcon="back" leftOnPress={()=>navigation.goBack()} rightIcon='hamburgerMenu' />
         <Title title='Messages'/>
         <View style={styles.inputContainer} >
         <Image source={image.icon.search} style={styles.inputIconStyle} />
         <TextInput style={[styles.inputStyle,typography.captions]} value={filter} onChangeText={text => setFilter(text)} placeholder='Search for contacts' />
         </View>
         <FlatList
            style={styles.listContainer}
            data={messages}
            renderItem={renderItem}
            keyExtractor={item => item.userId}
        />
      </KeyboardAvoidingView>
    );
}

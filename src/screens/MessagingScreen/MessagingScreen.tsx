import * as React from 'react';
import { View, Text ,TouchableOpacity, Image} from 'react-native';
import { UpperMenu } from '../../components/UpperMenu/UpperMenu';
import image from '../../assents/images';
import styles from './MessagingScreens.style'
import { Title } from '../../components/Title/Title';
import { useNavigation } from '@react-navigation/native';
export interface MessagingScreenProps {
}

const BackButton=()=>{
    
    <TouchableOpacity>
        <Text>tetet</Text>
        <Image style={styles.backImage} source={image.icon.back} />
    </TouchableOpacity>
}

export function MessagingScreen ({}: MessagingScreenProps) {
    const navigation = useNavigation();
    return (
      <View>
         <View>
            <Image style={styles.bgImage} source={image.bg.conversations} />
         </View>
         
         <UpperMenu leftIcon="back" leftOnPress={()=>navigation.goBack()} rightIcon='hamburgerMenu' />
         <Title title='Messages'/>
      </View>
    );
}

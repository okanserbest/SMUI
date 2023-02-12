import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, TouchableOpacity, View, Image } from "react-native";
import { ProfileScreen } from '../../screens/ProfileScreen/ProfileScreen'
import { HomeScreen } from '../../screens/HomeScreen/HomeScreen'
import { LikeScreen } from '../../screens/LikeScreen/LikeScreen'
import { MessagingScreen } from '../../screens/MessagingScreen/MessagingScreen'
import { AddScreen } from '../../screens/AddScreen/AddScreen'
import { SH, SW } from "../../styles";
import image from '../../assents/images'
import styles from './AppSrack.style'
import colors from "../../styles/colors";

const Tab = createBottomTabNavigator();

const AppStack = ({ }) => {

  return (
    <Tab.Navigator
      screenOptions={{
        
        tabBarShowLabel: false,
        headerShown:false,
        tabBarStyle: {
          position: 'absolute',
          height: 82.88 * SH,
          borderColor:colors.white,
          borderTopLeftRadius: 20 * SH,
          borderTopRightRadius: 20 * SH,

        },
      }}

    >
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIconContainer}>
            <Image source={image.icon.homeActive} style={styles.tabBarIconImage} />
            </View>
          )
        }}
      />
            <Tab.Screen name="Messaging" component={MessagingScreen}
            
      options={{
        tabBarStyle: { display: 'none' },
        tabBarIcon: ({ focused }) => (
          <View style={styles.tabBarIconContainer}>
          <Image source={image.icon.message} style={styles.tabBarIconImage} />
          </View>
        )
      }}
      />
     
      <Tab.Screen name="Add" component={AddScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabBarIconContainer}>

            <Image source={image.icon.add} style={styles.tabBarIconImageAdd} />
            </View>
          )
        }}
      />
      <Tab.Screen name="Like" component={LikeScreen} 
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={styles.tabBarIconContainer}>
          <Image source={image.icon.heart} style={styles.tabBarIconImage} />
          </View>
        )
      }}
      />
 <Tab.Screen name="Profile" component={ProfileScreen}
      options={{
        
        tabBarIcon: ({ focused }) => (
          <View style={styles.tabBarIconContainer}>

          <Image source={image.icon.profile} style={styles.tabBarIconImage} />
          </View>
        )
      }} />

    </Tab.Navigator>
  )
}
export default AppStack
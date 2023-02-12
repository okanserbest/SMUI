import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';

import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import Onboarding from '../../screens/Onboarding/OnboardingScreens';
import { Text, View } from 'react-native';
import AppStack from '../AppStack';

const Stack = createStackNavigator();
const RootStack = () => {
  const navigationRef = useNavigationContainerRef();
  console.log("test RootStack")
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>

        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name={'App'} component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

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
import AppStack from '../AppStack';
import { ChatScreen } from '../../screens/ChatScreen/ChatScreen';

const Stack = createStackNavigator();
const RootStack = () => {
  const navigationRef = useNavigationContainerRef();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>

        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name={'App'} component={AppStack} />
        <Stack.Screen name={'Chat'} component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;

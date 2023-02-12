/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import RootStack from './src/routes/RootStack';
import { NavigationContainer } from '@react-navigation/native';

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
        <RootStack />
    </>
  );
}

export default App;

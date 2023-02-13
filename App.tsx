/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from "react-redux"
import RootStack from './src/routes/RootStack';
import configureStore from "./src/redux/store";

const store = configureStore();

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
        <RootStack />
    </Provider>
  );
}

export default App;

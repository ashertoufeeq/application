import React from 'react';
import 'react-native-gesture-handler';

import codePush from 'react-native-code-push';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import { Provider } from 'react-redux';

import { getStore } from 'common/reducers';
import { getStorage } from 'common/storage';

import { notify } from 'helpers/notify';
import { css } from 'styles';

import { Initial } from 'components/Initial';
import { GettingStarted } from 'components/GettingStarted';
import { MonorepoIntro } from 'components/MonorepoIntro';
import { useNotification } from 'hooks/notification';

const Stack = createStackNavigator();
const { store, persistor } = getStore(AsyncStorage);

global.persistor = persistor;
global.storage = getStorage(AsyncStorage);
global.notify = notify;
global.css = css;

const App = () => {
  useNotification();
  
  return (
    <Provider store={store}>
      <StatusBar barStyle='dark-content' />
      <NavigationContainer screenOptions={{ headerShown: false }}>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={GettingStarted} />
          <Stack.Screen name='Intro' component={MonorepoIntro} />
        </Stack.Navigator>
      </NavigationContainer>
      <Initial />
    </Provider>
  );
};

export default codePush()(App);

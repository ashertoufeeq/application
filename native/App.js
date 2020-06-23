import React from 'react';
import 'react-native-gesture-handler';

import codePush from 'react-native-code-push';
import { StatusBar } from 'react-native';
import { setCustomText } from 'react-native-global-props';

import AsyncStorage from '@react-native-community/async-storage';
import { Provider } from 'react-redux';
import { encode as btoa } from 'base-64';

import { getStore } from 'common/reducers';
import { getStorage } from 'common/storage';

import { notify } from 'helpers/notify';
import { css, getFontStyleForWeight } from 'styles';

import { Initial } from 'components/Initial';
import { useNotification } from 'hooks/notification';

import { Navigator } from 'screens';


const { store, persistor } = getStore(AsyncStorage);

global.persistor = persistor;
global.storage = getStorage(AsyncStorage);
global.notify = notify;
global.css = css;
global.btoa = btoa;

setCustomText({ style: { ...getFontStyleForWeight('Nunito', 400) } });

const App = () => {
  useNotification();

  return (
    <Provider store={store}>
      <StatusBar barStyle='dark-content' />
      <Navigator />
      <Initial />
    </Provider>
  );
};

export default codePush()(App);

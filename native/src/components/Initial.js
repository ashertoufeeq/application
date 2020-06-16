import React, { useEffect } from 'react';

import RNBootSplash from 'react-native-bootsplash';
import AsyncStorage from '@react-native-community/async-storage';

import Analytics from 'appcenter-analytics';
import FlashMessage from 'react-native-flash-message';

import { useUser } from 'hooks/auth';

import { notify } from 'helpers/notify';
import { getStorage } from 'common/storage';
import { css } from 'styles';

global.storage = getStorage(AsyncStorage);
global.notify = notify;
global.css = css;

export const Initial = () => {
  const { getCurrentUser } = useUser(false);

  const init = async () => {
    await getCurrentUser();
    await Analytics.trackEvent('SessionStarted');
  };

  useEffect(() => {
    init().finally(() => {
      RNBootSplash.hide();
    });
  }, []);

  return <FlashMessage />;
};

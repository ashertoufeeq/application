import React, { useEffect } from 'react';

import RNBootSplash from 'react-native-bootsplash';

import Analytics from 'appcenter-analytics';
import FlashMessage from 'react-native-flash-message';

import { useGoogleAuthentication } from 'hooks/auth';

export const Initial = () => {
  const { getCurrentUser } = useGoogleAuthentication();

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

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import RNBootSplash from "react-native-bootsplash";
import Analytics from 'appcenter-analytics';

import { sessionStarted } from 'common/actions/demo';
import { useUser } from 'hooks/auth';

export const Initial = () => {
  const dispatch = useDispatch();
  const { getCurrentUser } = useUser(false);
  
  const init = async () => {
    await getCurrentUser();
    await Analytics.trackEvent('SessionStarted');
    dispatch(sessionStarted());
  };

  useEffect(() => {
    init().finally(() => {
      RNBootSplash.hide();
    });
  }, []);

  return null;
};

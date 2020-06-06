import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import RNBootSplash from "react-native-bootsplash";
import Analytics from 'appcenter-analytics';

import { sessionStarted } from 'common/actions/demo';

export const Initial = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    RNBootSplash.hide();
    dispatch(sessionStarted());
    Analytics.trackEvent(
      'SessionStarted'
    ).then((...args) => console.log('App center session started', args));
  }, []);

  return null;
};

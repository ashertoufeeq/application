import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { sessionStarted } from 'common/actions/demo';
import Analytics from 'appcenter-analytics';

export const Initial = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sessionStarted());
    Analytics.trackEvent(
      'SessionStarted'
    ).then((...args) => console.log('App center session started', args));
  }, []);

  return null;
};

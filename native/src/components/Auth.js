import React, { useEffect, useState } from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

import { Text, TouchableOpacity } from 'react-native';
import { GOOGLE_SIGNIN_WEB_CLIENT_ID } from 'common/secrets'

GoogleSignin.configure({
  webClientId: GOOGLE_SIGNIN_WEB_CLIENT_ID,
  offlineAccess: true,
});

export const Auth = () => {
  const [userInfo, setUserInfo] = useState(undefined);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      setUserInfo(await GoogleSignin.signIn());
    } catch (error) {
      console.warn(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };


  const getCurrentUserInfo = async () => {
    const start = new Date();
    try {
      setUserInfo(await GoogleSignin.signInSilently());
    } catch (error) {
      console.warn(error);
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        // user has not signed in yet
      } else {
        // some other error
      }
    }

    console.log(new Date() - start, 'TIME TAKEN');
  };

  useEffect(() => {
    getCurrentUserInfo().then();
  }, []);

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  return (
    <>
      <Text>
        {userInfo ? 'User is signed-in' : 'Needs to sign-in'}
      </Text>

      <TouchableOpacity onPress={signIn}>
        <Text>
          Click to sign in
        </Text>
      </TouchableOpacity>
    </>
  );
};

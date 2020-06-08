import React, {useEffect, useState} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

import {Text, TouchableOpacity} from 'react-native';

GoogleSignin.configure({
  webClientId: '242419208720-dnj0cc3fc9d1p3rg3umhblu2kkefkrvb.apps.googleusercontent.com',
  offlineAccess: true,
  iosClientId: '242419208720-pige2u1it77k9e90s9f8sor2i43ilc37.apps.googleusercontent.com',
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

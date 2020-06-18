import { useGoogleLogin, useGoogleLogout } from 'react-google-login';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { googleAuthenticate, logout as logoutAction } from 'common/actions/auth';

import { GOOGLE_SIGNIN_WEB_CLIENT_ID } from 'common/secrets';

export const useUser = (autoLoad = true) => {
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [inProgress, setInProgress] = useState(true);
  const dispatch = useDispatch();


  const onLoginSuccess = async (info) => {
    await googleAuthenticate({ googleId: info.googleId, token: info.tokenId })(dispatch);
    setInProgress(false);
  };

  const onLoginFail = (...args) => {
    console.log('On Login Fail');
    console.log(args);
    setInProgress(false);
  };

  const onAutoLoadFinished = () => {
    setInProgress(false);
  };

  const { signIn: googleSignIn, loaded: signInLoaded } = useGoogleLogin({
    clientId: GOOGLE_SIGNIN_WEB_CLIENT_ID,
    responseType: 'id_token',
    accessType: 'offline',
    onSuccess: onLoginSuccess,
    onFailure: onLoginFail,
    onAutoLoadFinished,
    fetchBasicProfile: autoLoad,
    // autoLoad,
    isSignedIn: true,
  });

  const onLogoutSuccess = async () => {
    dispatch(logoutAction());
    setInProgress(false);
  };

  const onLogoutFailure = async () => {
    setInProgress(false);
  };

  const { signOut: googleSignOut, loaded: signOutLoaded } = useGoogleLogout({
    clientId: GOOGLE_SIGNIN_WEB_CLIENT_ID,
    responseType: 'id_token',
    accessType: 'offline',
    onLogoutSuccess,
    onFailure: onLogoutFailure,
    onAutoLoadFinished,
  });

  const signIn = async () => {
    setInProgress(true);
    await googleSignIn();
  };

  const signOut = async () => {
    setInProgress(true);
    await googleSignOut();
  };

  const getCurrentUser = async () => {
  };

  return {
    user, isAuthenticated,
    signIn, signOut, getCurrentUser,
    inProgress: inProgress || !signInLoaded || !signOutLoaded,
  };
};

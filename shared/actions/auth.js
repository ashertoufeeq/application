import api from '../api';
import { Storage } from '../helpers/shared';

import { USER_AUTHENTICATED, USER_LOGOUT } from './index';

export const getUserMeta = () => async (dispatch) => {
  const { data: user } = await api.get('/auth/meta/');

  // send token request
  dispatch({ type: USER_AUTHENTICATED, user });
};

export const googleAuthenticate = ({ googleId, token }) => async (dispatch) => {
  const {
    data: { access, refresh },
  } = await api.post('/auth/sign-in/google/', { googleId, token }, { secure: false });

  await Storage().save({ key: 'apiTokens', id: 'access', data: access });
  await Storage().save({ key: 'apiTokens', id: 'refresh', data: refresh });

  await getUserMeta()(dispatch);
};

export const logout = () => async (dispatch) => {
  await Storage().remove({ key: 'apiTokens' });
  dispatch({ type: USER_LOGOUT });
};

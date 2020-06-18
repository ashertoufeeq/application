import { USER_AUTHENTICATED, USER_LOGOUT } from 'common/actions/index';

import api from 'common/api';
import { Storage } from 'common/helpers/shared';

export const googleAuthenticate = ({ googleId, token }) => async (dispatch) => {
  const {
    data: { access, refresh },
  } = await api.post('http://localhost/auth/google/', { googleId, token }, { secure: false });

  await Storage().save({ key: 'apiTokens', id: 'access', data: access });
  await Storage().save({ key: 'apiTokens', id: 'refresh', data: refresh });
  
  const { data: user } = await api.get('/meta/');

  // send token request
  dispatch({ type: USER_AUTHENTICATED, user });
};

export const logout = () => async (dispatch) => {
  await Storage().remove({ key: 'apiTokens' });
  dispatch({ type: USER_LOGOUT });
};

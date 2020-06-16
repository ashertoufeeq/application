import { USER_AUTHENTICATED } from 'common/actions/index';

const authenticate = (user) => async (dispatch, getState) => {
  // send token request
  dispatch({ type: USER_AUTHENTICATED, user });
};

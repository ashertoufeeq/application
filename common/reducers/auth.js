import { USER_AUTHENTICATED, LOGOUT, RESET_STATE } from 'common/actions';

const initialState = {
  user: {
    givenName: null,
    familyName: null,
    image: null,
    id: null,
  },
  isAuthenticated: false,
  refresh: null,
  access: null,
};

export const auth = (state = initialState, action) => {
  const $ = (newState) => ({ ...state, ...newState });

  switch (action.type) {
    case USER_AUTHENTICATED: {
      const { user, access, refresh } = action;
      return $({ user, access, refresh });
    }
    case LOGOUT:
      return $(initialState);

    case RESET_STATE:
      return initialState;
    default:
      return $();
  }
};

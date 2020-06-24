import { RESET_STATE, CHANGE_PRIMARY_COLOR } from '../actions';
import { PRIMARY_COLOR } from '../secrets.json';

const initialState = {
  primaryColor: PRIMARY_COLOR,
};

export const theme = (state = initialState, action) => {
  const $ = (newState) => ({ ...state, ...newState });

  switch (action.type) {
    case CHANGE_PRIMARY_COLOR:
      return $({ primaryColor: action.color });

    case RESET_STATE:
      return initialState;

    default:
      return $();
  }
};

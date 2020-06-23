import { RESET_STATE } from '../actions';
import { PRIMARY_COLOR } from '../secrets.json';

const initialState = {
  primaryColor: PRIMARY_COLOR,
};

export const theme = (state = initialState, action) => {
  const $ = (newState) => ({ ...state, ...newState });

  switch (action.type) {
    case RESET_STATE:
      return initialState;

    default:
      return $();
  }
};

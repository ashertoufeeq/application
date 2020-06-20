import { Persistor } from '../helpers/shared';

import { HELLO_BUTTON_CLICKED, RESET_STATE } from './index';

export const demoButtonClicked = () => ({
  type: HELLO_BUTTON_CLICKED,
});

export const resetState = () => async (dispatch) => {
  dispatch({ type: RESET_STATE });
  await Persistor().purge();
};

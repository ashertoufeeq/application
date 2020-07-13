import { ADD_TO_CART } from 'common/actions';
import _ from 'lodash-es';

const initialState = {
  cart: [],
};

export const product = (state = initialState, action) => {
  const $ = (newState) => ({ ...state, ...newState });

  switch (action.type) {

    case ADD_TO_CART: {
      let { cart } = state;
      const { productId } = action;
      if (_.isArray(cart)) cart = {};
      if (!cart[productId]) cart[productId] = 1;
      else cart[productId] += 1;

      return $({ cart });
    }

    default:
      return state;
  }
};

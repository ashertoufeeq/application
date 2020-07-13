import { ADD_TO_CART, RESET_STATE } from 'common/actions';
import _ from 'lodash-es';

const initialState = {
  cart: {}
};

export const product = (state = initialState, action) => {
  const $ = (newState) => ({ ...state, ...newState });

  switch (action.type) {
    case ADD_TO_CART: {
      const { cart } = state;
      const { productId, title, image } = action.payload;
      if (!cart[productId]) cart[productId] = {
        name: title,
        img: image,
        unit: 1
      };
      else cart[productId].unit += 1;
      console.log(cart);
      return $({ cart });
    }
    case RESET_STATE:
      return initialState;

    default:
      return state;
  }
};

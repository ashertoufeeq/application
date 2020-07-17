import { ADD_TO_CART, RESET_STATE,DECREMENT_CART } from 'common/actions';

import _ from 'lodash-es';

const initialState = {
  cart: {}
};

export const product = (state = initialState, action) => {
  const $ = (newState) => ({ ...state, ...newState });

  switch (action.type) {
    case ADD_TO_CART: {
      const { cart } = state;
      const { productId, title,price, image } = action.payload;
      if (!cart[productId]) cart[productId] = {
        name: title,
        price,
        img: image,
        unit: 1
      };
      else cart[productId].unit += 1;
      return $({ cart });
    }
    case DECREMENT_CART:{
      const { cart } =state;
      const { productId } = action;
      cart[productId].unit -= 1;
      const temp=cart[productId].unit;
      if(temp === 0){
        delete cart[productId];
      }
      return $({ cart });
    }

    case RESET_STATE:
      return initialState;

    default:
      return state;
  }
};

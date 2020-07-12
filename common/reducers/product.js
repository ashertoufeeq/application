import { ADD_TO_CART } from 'common/actions';

const initialState = {
  cart: []
};

export const product = (state = initialState, action) => {
  const $ = (newState) => ({ ...state, ...newState });

  switch (action.type) {
    
    case ADD_TO_CART: {
      return $({ cart: [...state.cart, action.productId] });
    }

    default:
      return $();
  }
};

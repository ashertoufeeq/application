import { useDispatch } from "react-redux";
import { API_BASE_URL } from "common/secrets.json";
import api from "common/api";
import { ADD_TO_CART } from "./index";

export const postProductOnCart = (product) => async (dispatch) => {
  console.log(" im in post product",product);
  const newProduct = {
    product ,
    response: {
      detail: "Added to Cart",
    },
  };
  newProduct.date = new Date().toISOString();
  const url = `${API_BASE_URL}/app/cart/item/`;
  try {
    const response = await api.post(url, newProduct );
    console.log(response.data,'res');
    dispatch({
      type:ADD_TO_CART,
      payload:response,
    })
  }catch(error){
    console.log(error);
  }
}

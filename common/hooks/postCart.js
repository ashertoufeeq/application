import { useDispatch } from "react-redux";
import { API_BASE_URL } from "../secrets.json";
import api from "../api";
import { ADD_TO_CART } from "../actions";

export const postProductOnCart = (id) => async (dispacth) => {
  const dispatch = useDispatch();
  console.log(" im in post product");
  const newProduct = {
    data: id,
    response: {
      detail: "Added to Cart",
    },
  };
  newProduct.date = new Date().toISOString();
  const url = `${API_BASE_URL}/app/cart/item`;
  try {
    const response = await api.post(url, newProduct);
    console.log(response.data);
    dispatch({
      type:ADD_TO_CART,
      paylod:response,
    })
  }catch(error){
    console.log(error);
  }

}

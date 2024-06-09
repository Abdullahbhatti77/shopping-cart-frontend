import { calculateTotalPrice, calculateTotalProducts,removeProduct,calculateremovePrice } from './productSlice/slice';

export const addToCart = (price,name) => async (dispatch) => {
  dispatch(calculateTotalPrice(price,name));
  dispatch(calculateTotalProducts());
};

export const removeFromCart = (price,name) => async (dispatch) => {
  dispatch(calculateremovePrice(price,name));
  dispatch(removeProduct());
};

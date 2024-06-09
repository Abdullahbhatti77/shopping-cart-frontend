import * as api from "../../api/product";
import { FETCH, CREATE, UPDATE, DELETE } from "../../constants/product";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProducts();
    dispatch({ type: FETCH, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createProduct = (product) => async (dispatch) => {
  try {
    const { data } = await api.createProduct(product);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const updateProduct = (id, product) => async (dispatch) => {
  try {
    const { data } = await api.updateProduct(id, product);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteProduct = (id) => async (dispatch) => {
  try {
    await api.deleteProduct(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

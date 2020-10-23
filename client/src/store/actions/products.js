import { GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE } from './constants';
import { getAllProducts } from '../../API/productApi';

const getProductsLoading = () => ({
  type: GET_PRODUCTS,
});

const getProductsSuccess = (payload) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload,
});

const getProductsFailure = (error) => ({
  type: GET_PRODUCTS_FAILURE,
  error,
});

export default () => async (dispatch) => {
  getProductsLoading();
  try {
    const response = await getAllProducts();
    dispatch(getProductsSuccess(response.data));
  } catch (error) {
    dispatch(getProductsFailure(error));
  }
};

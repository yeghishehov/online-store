import { GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE } from './constants';
import {
  getAllRequest, getMenRequest, getWomenRequest, getOutletRequest,
} from '../../API/productApi';
import ROUTES from '../../globals/routes';

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

export default (route) => async (dispatch) => {
  dispatch(getProductsLoading());
  try {
    let response;
    switch (route) {
      case ROUTES.men: {
        response = await getMenRequest();
        break;
      }
      case ROUTES.women: {
        response = await getWomenRequest();
        break;
      }
      case ROUTES.outlet: {
        response = await getOutletRequest();
        break;
      }
      default: {
        response = await getAllRequest();
      }
    }
    dispatch(getProductsSuccess(response.data));
  } catch (error) {
    dispatch(getProductsFailure(`${error}`));
  }
};

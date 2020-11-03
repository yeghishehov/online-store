import {getAllOrdersRequest, removeOrderRequest, createOrderRequest} from '../../API/ordersApi';
import { 
  GET_ORDERS,
  GET_ORDERS_SUCCESS,
  GET_ORDERS_FAILURE,

  CREATE_ORDER,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,

  REMOVE_ORDER,
  REMOVE_ORDER_SUCCESS,
  REMOVE_ORDER_FAILURE,
} from './constants';

const getOrdersLoading = () => ({
  type: GET_ORDERS,
});
const getOrdersSuccess = (payload) => ({
  type: GET_ORDERS_SUCCESS,
  payload,
});
const getOrdersFailure = (error) => ({
  type: GET_ORDERS_FAILURE,
  error,
});

const createOrderLoading = () => ({
  type: CREATE_ORDER,
});
const createOrderSuccess = (payload) => ({
  type: CREATE_ORDER_SUCCESS,
  payload,
});
const createOrderFailure = (error) => ({
  type: CREATE_ORDER_FAILURE,
  error,
});

const removeOrderLoading = () => ({
  type: REMOVE_ORDER,
});
const removeOrderSuccess = (payload) => ({
  type: REMOVE_ORDER_SUCCESS,
  payload,
});
const removeOrderFailure = (error) => ({
  type: REMOVE_ORDER_FAILURE,
  error,
});

export const getOrder = (user) => async (dispatch) => {
  dispatch(getOrdersLoading());
  try {
    const response = await getAllOrdersRequest();
    dispatch(getOrdersSuccess(response.data));
  } catch (error) {
    dispatch(getOrdersFailure(`${error}`));
  }
}

export const createOrder = (order) => async (dispatch) => {
  dispatch(createOrderLoading());
  try {
    const successCreatingResponse = await createOrderRequest(order);
    dispatch(createOrderSuccess(successCreatingResponse.data));
  } catch (error) {
    dispatch(createOrderFailure(`${error}`));
  }
}

export const removeOrder = (orderId) => async (dispatch) => {
  dispatch(removeOrderLoading());
  try {
    const successRemovingResponse = await removeOrderRequest(orderId);
    dispatch(removeOrderSuccess(successRemovingResponse.data));
  } catch (error) {
    dispatch(removeOrderFailure(`${error}`));
  }
}

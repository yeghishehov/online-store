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

  CLEAR_ORDERS,
} from '../actions/constants';

const initialState = {
  data: [],
  loading: false,
  error: '',
  successMessage: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    // ---- GETTING ----
    case GET_ORDERS:
      return {
        ...state,
        loading: true,
      };
    case GET_ORDERS_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        successMessage: '',
        error: '',
      };
    case GET_ORDERS_FAILURE:
      return {
        data: [],
        loading: false,
        successMessage: '',
        error: action.error,
      };

    // ---- CREATING ----
    case CREATE_ORDER:
      return {
        ...state,
        loading: true,
      };
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        successMessage: action.payload,
        error: '',
      };
    case CREATE_ORDER_FAILURE:
      return {
        ...state,
        loading: false,
        successMessage: '',
        error: action.error,
      };

    // ---- REMOVING ----
    case REMOVE_ORDER:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        successMessage: action.payload,
        error: '',
      };
    case REMOVE_ORDER_FAILURE:
      return {
        ...state,
        loading: false,
        successMessage: '',
        error: action.error,
      };

    // ---- CLEARING ----
    case CLEAR_ORDERS:
      return {
        ...state,
        data: [],
      }

    // ---- DEFAULT ----
    default: return state;
  }
};

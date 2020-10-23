import { GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAILURE } from '../actions/constants';

const initialState = {
  data: [],
  loading: false,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: '',
      };
    case GET_PRODUCTS_FAILURE:
      return {
        data: [],
        loading: false,
        error: action.error,
      };
    default: return state;
  }
};

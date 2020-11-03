import { GET_USER, GET_USER_SUCCESS, GET_USER_FAILURE } from '../actions/constants';

const initialState = {
  data: {},
  loading: false,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: '',
      };
    case GET_USER_FAILURE:
      return {
        data: [],
        loading: false,
        error: action.error,
      };
    default: return state;
  }
};

import { GET_USER_SUCCESS } from './constants';

const getUserSuccess = (payload) => ({
  type: GET_USER_SUCCESS,
  payload,
});

export default (user) => async (dispatch) => {
  dispatch(getUserSuccess(user))
}

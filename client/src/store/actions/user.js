import { GET_USER, GET_USER_SUCCESS, GET_USER_FAILURE } from './constants';

export const getUserLoading = () => ({
  type: GET_USER,
});

export const getUserSuccess = (payload) => ({
  type: GET_USER_SUCCESS,
  payload,
});

export const getUserFailure = (error) => ({
  type: GET_USER_FAILURE,
  error,
});
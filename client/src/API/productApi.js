import axios from '../utils/axiosConfig';

export const getAllRequest = () => (
  axios.get('/shoes/all')
);

export const getMenRequest = () => (
  axios.get('/collections/men')
);

export const getWomenRequest = () => (
  axios.get('/collections/women')
);

export const getOutletRequest = () => (
  axios.get('/collections/outlet')
);

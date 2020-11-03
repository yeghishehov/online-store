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

export const getAccesoriesRequest = () => (
  axios.get('/collections/accesories')
);

export const getClothingRequest = () => (
  axios.get('/collections/clothing')
);

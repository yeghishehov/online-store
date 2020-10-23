import axios from '../utils/axiosConfig';

export const getAllProducts = () => (
  axios.get('/shoes/all')
);
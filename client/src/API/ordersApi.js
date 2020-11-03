import axios from '../utils/axiosConfig';

export const getAllOrdersRequest = () => (
  axios.get('/orders/getOrders')
);

export const createOrderRequest = (order) => (
  axios.post('/orders/create', {order})
);

export const removeOrderRequest = (orderId) => (
  axios.delete(`/orders/remove${orderId}`)
);


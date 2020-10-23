import axios from '../utils/axiosConfig';

export const checkAuthorization = () => (
  axios.get('/auth/isAuthorized')
);

export const loginRequest = (form) => (
  axios.post('/auth/login', { ...form })
);

export const registrationRequest = (form) => (
  axios.post('/auth/register', { ...form })
);

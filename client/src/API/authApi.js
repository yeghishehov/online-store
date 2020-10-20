import axios from '../utils/axiosConfig';

export const checkAuthorization = () => (
  axios.get('/api/auth/isAuthorized')
);

export const loginRequest = (form) => (
  axios.post('/api/auth/login', { ...form })
);

export const registrationRequest = (form) => (
  axios.post('/api/auth/register', { ...form })
);

import axios from '../utils/axiosConfig';

export const checkAuthorization = (token) => (
  axios.post('/api/auth/isAuthorized', { token })
);

export const loginRequest = (form) => (
  axios.post('/api/auth/login', { ...form })
);

export const registrationRequest = (form) => (
  axios.post('/api/auth/register', { ...form })
);

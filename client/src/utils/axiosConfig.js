import axios from 'axios';
import { apiUrl } from './parameters';

axios.setXApKey = (token) => {
  axios.defaults.headers.common.Authorization = token;
};

axios.defaults.baseURL = apiUrl;
axios.defaults.withCredentials = true

const userData = localStorage.getItem('userData');
if (userData && userData.token) {
  axios.defaults.headers.common.Authorization = userData.token;
}

export default axios;

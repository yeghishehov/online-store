import { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import initUser from '../store/actions/user';
import { getOrder, clearOrders } from '../store/actions/orders';
import { checkAuthorization } from '../API/authApi';
import axios from '../utils/axiosConfig';

const storageName = 'userData';

export default () => {
  const dispatch = useDispatch();
  const [token, setToken] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(false);

  const login = useCallback((jwtToken) => {
    setToken(jwtToken);
    setIsAuthorized(true);
    axios.setXApKey(jwtToken);
    dispatch(getOrder());

    localStorage.setItem(storageName, JSON.stringify({
      token: jwtToken
    }));
  }, [dispatch]);

  const logout = useCallback(() => {
    setToken(null);
    setIsAuthorized(false);
    dispatch(initUser({}))
    dispatch(clearOrders());
    localStorage.removeItem(storageName);
  }, [dispatch]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));
    if (data && data.token) {
      axios.setXApKey(data.token);
      const checkingAuthorization = async () => {
        try {
          const response = await checkAuthorization(data.token);
          login(data.token);
          dispatch(initUser(response.data.user))
        } catch (error) {
          logout();
        }
      };
      checkingAuthorization();
    } else logout();
  }, [login, logout, dispatch]);

  return {
    login, logout, token, isAuthorized, setIsAuthorized,
  };
};

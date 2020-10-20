import { useState, useCallback, useEffect } from 'react';
import axios from '../utils/axiosConfig';
import { checkAuthorization } from '../API/authApi';

const storageName = 'userData';

export default () => {
  const [token, setToken] = useState(null);
  const [name, setName] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(false);

  const login = useCallback((jwtToken, userName) => {
    setToken(jwtToken);
    setName(userName);
    setIsAuthorized(true);
    axios.setXApKey(jwtToken);

    localStorage.setItem(storageName, JSON.stringify({
      token: jwtToken, name: userName,
    }));
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setName(null);
    setIsAuthorized(false);
    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));
    if (data && data.token && data.name) {
      axios.setXApKey(data.token);
      const checkingAuthorization = async () => {
        try {
          await checkAuthorization(data.token);
          login(data.token, data.name);
        } catch (error) {
          logout();
        }
      };
      checkingAuthorization();
    } else logout();
  }, [login, logout]);

  return {
    login, logout, token, name, isAuthorized, setIsAuthorized,
  };
};

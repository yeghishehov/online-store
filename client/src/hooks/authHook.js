import { useState, useCallback, useEffect } from 'react';
import { checkAuthorization } from '../API/authApi';

const storageName = 'userData';

export default () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(false);

  const login = useCallback((jwtToken, id) => {
    setToken(jwtToken);
    setUserId(id);
    setIsAuthorized(true);

    localStorage.setItem(storageName, JSON.stringify({
      token: jwtToken, userId: id,
    }));
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    setIsAuthorized(false);
    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));
    if (data && data.token) {
      const checkingAuthorization = async () => {
        try {
          await checkAuthorization(data.token);
          login(data.token, data.userId);
        } catch (error) {
          logout();
        }
      };
      checkingAuthorization();
    }
  }, [login, logout]);

  return {
    login, logout, token, userId, isAuthorized, setIsAuthorized,
  };
};

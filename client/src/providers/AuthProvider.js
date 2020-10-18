import React from 'react';
import PropTypes from 'prop-types';
import useAuth from '../hooks/authHook';
import { AuthContext } from '../contexts/authContext';

export default function AuthProvider({ children }) {
  const {
    login, logout, token, userId, isAuthorized, setIsAuthorized,
  } = useAuth();

  return (
    <AuthContext.Provider value={{
      login, logout, token, userId, isAuthorized, setIsAuthorized,
    }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

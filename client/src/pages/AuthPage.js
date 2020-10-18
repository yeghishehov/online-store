import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuthContext } from '../contexts/authContext';
import ROUTES from '../globals/routes';

export default function AuthPage() {
  const { logout, isAuthorized } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  if (!isAuthorized) return <Redirect to={ROUTES.login} />;

  return (
    <>
      <h1>
        USER PAGE
      </h1>
      <button type="button" onClick={handleLogout}>Logout</button>
    </>
  );
}

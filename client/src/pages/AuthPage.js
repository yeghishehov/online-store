import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuthContext } from '../contexts/authContext';
import ROUTES from '../globals/routes';
import axios from '../utils/axiosConfig';

export default function AuthPage() {
  const { logout, isAuthorized, name } = useAuthContext();
  const [files, setFiles] = useState(null);

  const handleLogout = () => {
    logout();
  };

  const handleSelectFile = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmitFile = () => {
    const formData = new FormData();
    for (let i = 0; i < files.length; i += 1) {
      formData.append('image', files[i]);
    }
    axios.post('/api/uploadfile', formData);
  };

  if (!isAuthorized) return <Redirect to={ROUTES.login} />;

  return (
    <>
      <h1>
        {name}
      </h1>
      <button type="button" onClick={handleLogout}>Logout</button>
      <br />
      <br />
      <br />
      <br />
      <input type="file" multiple onChange={handleSelectFile} />
      <button type="submit" onClick={handleSubmitFile}>Load</button>
    </>
  );
}

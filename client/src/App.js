import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/auth.hook';
// import { ThemeProvider } from '@material-ui/core/styles';
import Main from './main/Main';

function App() {
  const {login, logout, token, userId} = useAuth();
  return (
    <AuthContext.Provider value={{
      login, logout, token, userId
    }}>
      <Router>
        <Main />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
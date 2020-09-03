import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import { ThemeProvider } from '@material-ui/core/styles';
import Main from './pages/main/Main';

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
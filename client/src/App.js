import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from './providers/AuthProvider';
import store from './store';
import Main from './components/main/Main';

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <Main />
        </Router>
      </AuthProvider>
    </Provider>
  );
}

export default App;

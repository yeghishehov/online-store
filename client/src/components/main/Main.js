import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import routes from '../../routes';

export default function Main() {
  return (
    <div>
      <Header />
      <div style={{ minHeight: 'calc(100vh - 525px)' }}>
        {routes()}
      </div>
      <Footer />
    </div>
  );
}

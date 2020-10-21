import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
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

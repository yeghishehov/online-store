import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import routes from '../routes';

export default function Main() {
  return (
    <div>
      <Header />
      {routes()}
      <Footer />
    </div>
  );
}

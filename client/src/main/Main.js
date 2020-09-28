import React from 'react';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { useRoutes } from '../routes';

export default function Main() {
  const routes = useRoutes(false);

  return (
    <div>
      <Header />
      {routes}      
      <Footer />
    </div>
  )
}
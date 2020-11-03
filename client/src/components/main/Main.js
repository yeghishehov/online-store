import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getOrder } from '../../store/actions/orders'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import routes from '../../routes';

export default function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrder())
  })

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

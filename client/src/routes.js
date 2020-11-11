import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ROUTES from './globals/routes';

import Home from './pages/home/Home';
import AuthPage from './pages/authPage/AuthPage';
import Collection from './components/collection/Collection';
import Product from './components/product/Product';

import Shipment from './pages/otherPages/shipment/Shipment';
import Exchanges from './pages/otherPages/exchanges/Exchanges';
import Returns from './pages/otherPages/returns/Returns';
import SizeChart from './pages/otherPages/sizeChart/SizeChart';
import Faq from './pages/otherPages/faq/Faq';
import About from './pages/otherPages/about/About';
import Contact from './pages/otherPages/contact/Contact';
import DressYourProject from './pages/otherPages/dressYourProject/DressYourProject';
import Design from './pages/otherPages/design/Design';
import OfficialStores from './pages/otherPages/officialStores/OfficialStores';
import Legal from './pages/otherPages/legal/Legal';

import Login from './components/account/Login';
import Register from './components/account/Register';
import Orders from './components/orders/Orders';

const collections = Object.entries(ROUTES.collections)
  .map(el => ({name: el[0], path: el[1]}))

export default () => (
  <Switch>
    <Route exact path={ROUTES.home} component={Home} />

    {collections.map(collection => (
      <Route exact path={collection.path} key={collection.name} >
        <Collection collectionName={collection.name} />
      </Route>
    ))}

    {collections.map(collection => (
      <Route
        path={`${collection.path}/:product`}
        component={Product}
        key={collection.name}
      />
    ))}
    
    <Route path={`${ROUTES.collections.men}/:product`} component={Product} />
    <Route path={`${ROUTES.collections.women}/:product`} component={Product} />
    <Route path={`${ROUTES.collections.outlet}/:product`} component={Product} />
    <Route path={`${ROUTES.collections.clothing}/:product`} component={Product} />
    <Route path={`${ROUTES.collections.accesories}/:product`} component={Product} />

    <Route path={ROUTES.shipment} component={Shipment} />
    <Route path={ROUTES.exchanges} component={Exchanges} />
    <Route path={ROUTES.sizeChart} component={SizeChart} />
    <Route path={ROUTES.faq} component={Faq} />
    <Route path={ROUTES.returns} component={Returns} />

    <Route path={ROUTES.dressYourProject} component={DressYourProject} />
    <Route path={ROUTES.design} component={Design} />
    <Route path={ROUTES.officialStores} component={OfficialStores} />
    <Route path={ROUTES.legal} component={Legal} />
    <Route path={ROUTES.about} component={About} />
    <Route path={ROUTES.contact} component={Contact} />

    <Route path={ROUTES.login} component={Login} />
    <Route path={ROUTES.register} component={Register} />
    <Route path={ROUTES.authPage} component={AuthPage} />
    <Route path={ROUTES.orders} component={Orders} />
  </Switch>
);

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ROUTES from './globals/routes';

import Home from './pages/home/Home';
import AuthPage from './pages/authPage/AuthPage';
import Product from './components/product/Product';

import Men from './pages/collections/men/Men';
import Women from './pages/collections/women/Women';
import Outlet from './pages/collections/outlet/Outlet';
import Clothing from './pages/collections/clothing/Clothing';
import Accesories from './pages/collections/accesories/Accesories';


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

export default () => (
  <Switch>
    <Route exact path={ROUTES.home} component={Home} />
    <Route exact path={ROUTES.men} component={Men} />
    <Route exact path={ROUTES.women} component={Women} />
    <Route exact path={ROUTES.outlet} component={Outlet} />
    <Route exact path={ROUTES.clothing} component={Clothing} />
    <Route exact path={ROUTES.accesories} component={Accesories} />

    <Route path={`${ROUTES.men}/:product`} component={Product} />
    <Route path={`${ROUTES.women}/:product`} component={Product} />
    <Route path={`${ROUTES.outlet}/:product`} component={Product} />
    <Route path={`${ROUTES.clothing}/:product`} component={Product} />
    <Route path={`${ROUTES.accesories}/:product`} component={Product} />

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
  </Switch>
);

import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Contact from '../pages/contact/Contact'
import Men from '../collections/men/Men'
import Women from '../collections/women/Women'
import Outlet from '../collections/outlet/Outlet'

import { ROUTES } from '../globals/routes.js'

export default function Main() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path={ROUTES.home}>
          <Home />
        </Route>
        <Route path={ROUTES.men}>
          <Men />
        </Route>
        <Route path={ROUTES.women}>
          <Women />
        </Route>
        <Route path={ROUTES.outlet}>
          <Outlet />
        </Route>
        <Route path={ROUTES.about}>
          <About />
        </Route>
        <Route path={ROUTES.contact}>
          <Contact />
        </Route>
      </Switch>

      <Footer />
    </div>
  )
}
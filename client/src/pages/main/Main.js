import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Header from '../../components/header/Header'
import Home from '../home/Home'
import Men from '../men/Men'
import Women from '../women/Women'
import Outlet from '../outlet/Outlet'
import About from '../about/About'
import Contact from '../contact/Contact'

import { ROUTES } from '../../globals/routes.js'

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
    </div>
  )
}
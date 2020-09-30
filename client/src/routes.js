import React, { useState, useEffect } from 'react';
import {Switch, Route} from 'react-router-dom';
import { ROUTES } from './globals/routes';

import Home from './pages/home/Home'
import Men from './collections/men/Men'
import Women from './collections/women/Women'
import Outlet from './collections/outlet/Outlet'
import Shipment from './pages/shipment/Shipment'
import Exchanges from './pages/exchanges/Exchanges'
import Returns from './pages/returns/Returns'
import SizeChart from './pages/sizeChart/SizeChart'
import Faq from './pages/faq/Faq'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import DressYourProject from './pages/dressYourProject/DressYourProject'
import Design from './pages/design/Design'
import OfficialStores from './pages/officialStores/OfficialStores'
import Legal from './pages/legal/Legal'
import Login from './account/Login'
import Register from './account/Register'
import AuthPage from './pages/AuthPage'; 
import axios from './utils/axiosConfig';

export const useRoutes = () => {
    const [isAuthorized, setIsAuthorized] = useState(false)

    const checkingAuthorization = async () => {
        const data = JSON.parse(localStorage.getItem('userData'));
        if(data && data.token) {
            try {
                const aaa = await axios.post('/api/auth/isAuthorized', { token: data.token})
                setIsAuthorized(aaa.data)
            } catch (error) {
                console.log( error.response.data )
                setIsAuthorized(false)
                localStorage.removeItem('userData')
            }
        }
    }

    useEffect(() => {
        checkingAuthorization()
    }, [])



    if (isAuthorized) {
        return(
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


            <Route path={ROUTES.shipment}>
                <Shipment />
            </Route>
            <Route path={ROUTES.exchanges}>
                <Exchanges />
            </Route>
            <Route path={ROUTES.sizeChart}>
                <SizeChart />
            </Route>
            <Route path={ROUTES.faq}>
                <Faq />
            </Route>
            <Route path={ROUTES.returns}>
                <Returns />
            </Route>

            <Route path={ROUTES.dressYourProject}>
                <DressYourProject />
            </Route>
            <Route path={ROUTES.design}>
                <Design />
            </Route>
            <Route path={ROUTES.officialStores}>
                <OfficialStores />
            </Route>
            <Route path={ROUTES.legal}>
                <Legal />
            </Route>
            <Route path={ROUTES.about}>
                <About />
            </Route>
            <Route path={ROUTES.contact}>
                <Contact />
            </Route>

            <Route path={ROUTES.authPage}>
                <AuthPage />
            </Route>
        </Switch>
        )
    }

    return(
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


            <Route path={ROUTES.shipment}>
                <Shipment />
            </Route>
            <Route path={ROUTES.exchanges}>
                <Exchanges />
            </Route>
            <Route path={ROUTES.sizeChart}>
                <SizeChart />
            </Route>
            <Route path={ROUTES.faq}>
                <Faq />
            </Route>
            <Route path={ROUTES.returns}>
                <Returns />
            </Route>

            <Route path={ROUTES.dressYourProject}>
                <DressYourProject />
            </Route>
            <Route path={ROUTES.design}>
                <Design />
            </Route>
            <Route path={ROUTES.officialStores}>
                <OfficialStores />
            </Route>
            <Route path={ROUTES.legal}>
                <Legal />
            </Route>
            <Route path={ROUTES.about}>
                <About />
            </Route>
            <Route path={ROUTES.contact}>
                <Contact />
            </Route>

            <Route path={ROUTES.login}>
                <Login />
            </Route>
            <Route path={ROUTES.register}>
                <Register />
            </Route>
        </Switch>
    )
}
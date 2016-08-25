import React from 'react';
import {Router, Route, Redirect, hashHistory} from 'react-router';

import Main from 'page/layout/main';
import Contactus from 'page/layout/contactus';
import Home from 'page/home/home';
import Chat from 'page/chat/chat';
import PhonePane from 'page/phone';
import ComingSoon from 'page/layout/coming-soon';

const routes = (
    <Router history={hashHistory}>
        <Route path='/csc' component={Main}>
            <Route path='home' component={Home}/>
            <Route path='chat' component={Chat}/>
            <Route path='phone' component={PhonePane}/>
            <Route path='*' component={ComingSoon}/>
            <Redirect from="/" to="home"/>
        </Route>
        <Route path='contactus' component={Contactus}></Route>
    </Router>
);

export default routes;

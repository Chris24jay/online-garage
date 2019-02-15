import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './components/Login/Login';
import Garage from './components/Garage/Garage';
import Parts from './components/Parts/Parts';
import Cart from './components/Cart/Cart';

export default (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/garage' component = {Garage} />
        <Route path='/parts' component={Parts} />
        <Route path='/cart' component={Cart} />
    </Switch>
)
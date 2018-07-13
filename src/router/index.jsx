import { Switch, Route } from 'react-router-dom';
import React from 'react';

import FormPage from '../pages/FormPage';
import MainPage from '../pages/MainPage';

const Router = () => (
    <Switch>
        <Route exact path='/' component={ MainPage } />
        <Route path='/form' component={ FormPage } />
    </Switch>
);

export default Router;
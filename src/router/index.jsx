import { Switch, Route } from 'react-router-dom';
import React from 'react';
import FormPage from '../pages/FormPage';
import MainPage from '../pages/MainPage';
import routes from '../constants/routes'; 


const Router = () => (
    <Switch>
        <Route exact path={routes.HOME} component={ MainPage } />
        <Route path={routes.FORM} component={ FormPage } />
    </Switch>
);

export default Router;
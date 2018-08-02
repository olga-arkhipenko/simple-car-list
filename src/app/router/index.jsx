import { Switch, Route } from 'react-router-dom';
import React from 'react';
import AddFormPage from '../pages/AddFormPage';
import EditFormPage from '../pages/EditFormPage';
import MainPage from '../pages/MainPage';
import routes from '../constants/routes';

const Router = () => (
    <Switch>
        <Route
            exact
            path={ routes.HOME }
            component={ MainPage }
        />
        <Route
            exact
            path={ routes.ADD_FORM }
            component={ AddFormPage }
        />
        <Route
            exact
            path={ `${ routes.EDIT_FORM }/:id` }
            component={ EditFormPage }
        />
    </Switch>
);

export default Router;

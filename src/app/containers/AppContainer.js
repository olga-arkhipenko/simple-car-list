import { Switch, Route } from 'react-router-dom';
import React from 'react';
import AddFormPage from '../components/pages/AddFormPage';
import EditFormPage from '../components/pages/EditFormPage';
import MainPage from '../components/pages/MainPage';
import routes from '../constants/routes';

const AppContainer = () => (
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

export default AppContainer;

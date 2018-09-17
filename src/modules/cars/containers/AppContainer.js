import { Switch, Route } from 'react-router-dom';
import React from 'react';

import AddFormPage from 'carsModule/components/pages/AddFormPage';
import EditFormPage from 'carsModule/components/pages/EditFormPage';
import MainPage from 'carsModule/components/pages/MainPage';

import routes from 'common/constants/routes';

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
            path={ routes.EDIT_FORM }
            component={ EditFormPage }
        />
    </Switch>
);

export default AppContainer;

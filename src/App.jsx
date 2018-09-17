import React from 'react';

import Header from 'common/components/Header';
import AppContainer from 'carsModule/containers/AppContainer';
import WeatherWidgetContainer from 'weatherWidgetModule/containers/WeatherWidgetContainer';

const App = () => (
    <div className="App">
        <Header />
        <AppContainer />
        <WeatherWidgetContainer />
    </div>
);

export default App;

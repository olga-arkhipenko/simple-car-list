import React from 'react';
import Header from './common/components/Header';
import AppContainer from './modules/cars/containers/AppContainer';
import WeatherWidgetContainer from './modules/weatherWidget/containers/WeatherWidgetContainer';

const App = () => (
    <div className="App">
        <Header />
        <AppContainer />
        <WeatherWidgetContainer />
    </div>
);

export default App;

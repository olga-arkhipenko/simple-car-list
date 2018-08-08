import React from 'react';
import AppContainer from './app/containers/AppContainer';
import Header from './app/components/Header';
import WeatherWidgetContainer from './features/weatherWidget/containers/WeatherWidgetContainer';

const App = () => (
    <div className="App">
        <Header />
        <AppContainer />
        <WeatherWidgetContainer />
    </div>
);

export default App;

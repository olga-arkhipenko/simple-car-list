import React from 'react';
import Router from './app/router';
import Header from './app/components/Header';
// import WeatherWidgetContainer from './features/WeatherWidget/containers';

const App = () => (
    <div className="App">
        <Header />
        <Router />
        {/* <WeatherWidgetContainer/> */}
    </div>
);

export default App;

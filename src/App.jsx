import React, { Component } from 'react';
import Router from './app/router';
import Header from './app/components/Header';
import WeatherWidgetContainer from './features/WeatherWidget/containers';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Router/>
                <WeatherWidgetContainer/>
            </div>
        );
    }
}

export default App;

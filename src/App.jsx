import React, { Component } from 'react';
import Router from './app/router';
import Header from './app/components/Header';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Router/>
            </div>
        );
    }
}

export default App;

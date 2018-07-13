import React, { Component } from 'react';
import Router from './router';
import Header from './components/Header';

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

import React, { Component } from 'react';
import { Router } from './router';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <h1>Welcome to Hell</h1>
                </header>
                <Router/>
            </div>
        );
    }
}

export default App;

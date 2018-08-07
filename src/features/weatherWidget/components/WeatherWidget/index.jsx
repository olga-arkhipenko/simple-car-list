import React, { Component } from 'react';
import WeatherWidgetCover from '../WeatherWidgetCover';
import './index.css';

class WeatherWidget extends Component {
    // constructor(props) {
    //     super(props);
    // this.state = {
    //     isCoverHidden: false
    // };
    // }

    hideCover = () => console.log('hello')

    render() {
        return (
            <div className="widget">
                <WeatherWidgetCover onClick={ this.hideCover } />
            </div>
        );
    }
}

export default WeatherWidget;

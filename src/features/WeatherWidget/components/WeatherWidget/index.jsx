import React, { Component } from 'react';
import './style.css';
import WeatherWidgetCover from '../WeatherWidgetCover';

class WeatherWidget extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isCoverHidden: false
        };
    }

    hideCover = () => this.setState({
        isCoverHidden: true
    })

    render () {
        return (
            <div className="widget">
                { !this.state.isCoverHidden && <WeatherWidgetCover onClick={ this.hideCover }/> }
            </div>
        );
    }

};

export default WeatherWidget;
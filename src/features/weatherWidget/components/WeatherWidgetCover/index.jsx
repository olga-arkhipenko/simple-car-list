import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.css';

class WeatherWidgetCover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHidden: false
        };
    }

    handleClick = () => {
        this.setState({
            isHidden: true
        });
        this.props.onClick();
    }

    render() {
        const className = classNames('widget__cover', { hidden: this.state.isHidden });

        return (
            <div
                className={ className }
                onClick={ this.handleClick }
            />
        );
    }
}

WeatherWidgetCover.propTypes = {
    onClick: PropTypes.func
};

export default WeatherWidgetCover;

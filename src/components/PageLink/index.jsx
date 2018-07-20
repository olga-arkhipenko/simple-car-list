import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class PageLink extends Component {
    render() {
        const { children } = this.props;
        return (
            <Link to={ this.props.path } className={ `link ${ this.props.type || '' }` }>
                { children }
            </Link>
        )
    }
};

export default PageLink;
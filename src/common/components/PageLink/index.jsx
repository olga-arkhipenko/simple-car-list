import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import './index.css';

const PageLink = ({ children, path, type }) => {
    const className = classNames('link', type);

    return (
        <Link
            to={ path }
            className={ className }
        >
            { children }
        </Link>
    );
};

PageLink.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    path: PropTypes.string.isRequired,
    type: PropTypes.string
};

export default PageLink;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './index.css';

const PageLink = ({ children, path, type }) => (
    <Link
        to={ path }
        className={ `link ${ type || '' }` }
    >
        { children }
    </Link>
);

PageLink.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    path: PropTypes.string,
    type: PropTypes.string
};

export default PageLink;

import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const PageLink = ({ path, name, type }) => {
    return (
        <Link to={ path } className={ `link ${ type || '' }` }>
            { name || '' }
        </Link>
    )
};

export default PageLink;
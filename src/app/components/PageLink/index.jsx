import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const PageLink = ({ children, path, type }) => (
    <Link
        to={path}
        className={`link ${ type || '' }`}
    >
        { children }
    </Link>
);
export default PageLink;

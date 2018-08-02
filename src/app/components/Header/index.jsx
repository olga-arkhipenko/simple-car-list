import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import './index.css';

const Header = () => (
    <header className="header">
        <Link to={ routes.HOME }>
            <p className="logo">
                    Cars list
            </p>
        </Link>
    </header>
);

export default Header;

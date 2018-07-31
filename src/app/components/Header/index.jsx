import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import './style.css';

const Header = () => {
    return (
        <header className="header">
            <Link to={ routes.HOME }>
                <p className="logo">
                    Cars list
                </p>
            </Link>
        </header>
    );
};

export default Header;
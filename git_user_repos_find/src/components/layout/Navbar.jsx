import React from 'react';
import PropTypes from 'prop-types';
import {NavbarContainer} from './navbar.style'

import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
    return (
        <NavbarContainer>
            <h1>
                <i className={icon} /> {title}
            </h1>
            <ul>
                {/* <li>
                    <Link to='/'>Home</link>
                </li> */}
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </NavbarContainer>
    );
};

Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github',
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
};

export default Navbar;

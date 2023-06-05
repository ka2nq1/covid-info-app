import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {

    return (
        <ul>
            <li>
                <Link to='/'>World WIP</Link>
                <Link to='/country'>Live By Country</Link>
                <Link to='/about'>About</Link>
            </li>
        </ul>
    );
};

export default Sidebar;
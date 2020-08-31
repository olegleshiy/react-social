// Core
import React from 'react';
import { NavLink } from 'react-router-dom';

// U
import { book } from '../../navigation/book';

// Style
import Styles from './style.module.css';

const Navbar = () => {
    return (
        <div className={ Styles.sidebar }>
            <ul>
                <li className={Styles.item}>
                    <NavLink to={ book.home } activeClassName={ Styles.activeLink }>Home</NavLink>
                </li>
                <li className={Styles.item}>
                    <NavLink to={ book.dialogs } activeClassName={ Styles.activeLink }>Messages</NavLink>
                </li>
                <li className={Styles.item}>
                    <NavLink to='#d' activeClassName={ Styles.activeLink }>News</NavLink>
                </li>
                <li className={Styles.item}>
                    <NavLink to='#d'>Music</NavLink>
                </li>
                <li className={Styles.item}>
                    <NavLink to='#d'>Profile</NavLink>
                </li>
                <li className={Styles.item}>
                    <NavLink to='#d'>Settings</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;

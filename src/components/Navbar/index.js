// Core
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faUsers, faNewspaper, faMusic, faAddressCard, faCog } from '@fortawesome/free-solid-svg-icons';

// Navigation
import { book } from '../../navigation/book';

// Style
import Styles from './style.module.css';

const Navbar = () => {
    return (
        <div className={ Styles.sidebar }>
            <ul>
                <li className={Styles.item}>
                    <NavLink to={ book.home }><FontAwesomeIcon icon={faHome} /> Home</NavLink>
                </li>
                <li className={Styles.item}>
                    <NavLink to={ book.dialogs } activeClassName={ Styles.activeLink }><FontAwesomeIcon icon={faEnvelope} /> Messages</NavLink>
                </li>
                <li className={Styles.item}>
                    <NavLink to={ book.users } activeClassName={ Styles.activeLink }><FontAwesomeIcon icon={faUsers} /> Users</NavLink>
                </li>
                <li className={Styles.item}>
                    <NavLink to={ book.profile } activeClassName={ Styles.activeLink }><FontAwesomeIcon icon={faUsers} /> Profile</NavLink>
                </li>
                <li className={Styles.item}>
                    <NavLink to='#d'><FontAwesomeIcon icon={faNewspaper} /> News</NavLink>
                </li>
                <li className={Styles.item}>
                    <NavLink to='#d'><FontAwesomeIcon icon={faMusic} /> Music</NavLink>
                </li>
                <li className={Styles.item}>
                    <NavLink to='#d'><FontAwesomeIcon icon={faAddressCard} /> Profile</NavLink>
                </li>
                <li className={Styles.item}>
                    <NavLink to='#d'><FontAwesomeIcon icon={faCog} /> Settings</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;

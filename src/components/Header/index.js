// Core
import React from 'react';
import { NavLink } from 'react-router-dom';
import { book } from '../../navigation/book';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

// Style
import Styles from './style.module.css';

const Header = (props) => {
    return (
        <header className={ Styles.header }>
            <div>LESHIY_DEV</div>
            <div className={Styles.content}>
                {props.isAuthenticated ?
                <NavLink to={book.login} className={Styles.login}>{props.login} <FontAwesomeIcon icon={faSignInAlt} /></NavLink> :
                <NavLink to={book.login} className={Styles.login}><FontAwesomeIcon icon={faSignOutAlt} /></NavLink>}
            </div>
        </header>
    );
};

export default Header;

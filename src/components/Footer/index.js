// Core
import React from 'react';

// Style
import Styles from './style.module.css';

const Footer = () => {
    return (
        <footer className={ Styles.footer }>
            <p>&copy; <span>{ new Date().getFullYear() }</span> Oleh Zahrebelnyi </p>
        </footer>
    );
};

export default Footer;

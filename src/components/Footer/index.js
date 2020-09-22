// Core
import React, { useMemo } from 'react';

// Style
import Styles from './style.module.css';

const Footer = () => {

    const currentYear = useMemo(() => new Date().getFullYear(), []);

    return (
        <footer className={ Styles.footer }>
            <p className={Styles.copyright}>&copy; <span>{ currentYear }</span> Oleh Zahrebelnyi </p>
        </footer>
    );
};

export default Footer;

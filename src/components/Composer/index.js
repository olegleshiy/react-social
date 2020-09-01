// Core
import React from 'react';

// Components
import {
    Navbar,
    Dashboard,
} from '../index';

// Style
import Styles from './style.module.css';

const Composer = () => {
    return (
        <main className={ Styles.composer }>
            <Navbar/>
            <Dashboard/>
        </main>
    );
};

export default Composer;

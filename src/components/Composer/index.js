// Core
import React from 'react';

// Components
import {
    Navbar,
    Content,
} from '../index';

// Style
import Styles from './style.module.css';

const Composer = () => {
    return (
        <main className={ Styles.composer }>
            <Navbar/>
            <Content/>
        </main>
    );
};

export default Composer;

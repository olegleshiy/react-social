// Core
import React from 'react';

// Style
import Styles from './style.module.css';

const Button = ({ props: { options, children } }) => {

    return (
        <button { ...options } className={ Styles.btn }>
            { children }
        </button>
    );
};

export default Button;
// Core
import React from 'react';

// Instruments
import Styles from './style.module.css';
import { useSpinner } from './SpinnerContext';

const Spinner = () => {

    const loading = useSpinner();

    return loading.visible ? <div className = { Styles.spinner } /> : null;
}

export default Spinner;

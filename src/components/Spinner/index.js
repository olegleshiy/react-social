// Core
import React from 'react';

// Instruments
import Styles from './style.module.css';
import { useSpinner } from './SpinnerContext';

const Spinner = (props) => {

    //const loading = useSpinner();

    //return loading.visible ? <div className = { Styles.spinner } /> : null;
    return props.fetching ? <div className = { Styles.spinner } /> : null;
}

export default Spinner;

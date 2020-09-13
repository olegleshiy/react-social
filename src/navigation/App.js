// Core
import React from 'react';

// Route
import { Private, Public } from './index';

// Context
//import { SpinnerProvider } from '../components/Spinner/SpinnerContext';

// Style
import './style.css';
//import UiContainer from '../containers/UiContainer';

const App = (props) => {
    const isAuthenticated = true;

    return (
        <>
            { isAuthenticated ? <Private {...props}/> : <Public {...props}/> }
        </>
    );
};

export default App;

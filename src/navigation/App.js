// Core
import React from 'react';

// Route
import Private from './Private';
import Public from './Public';

// Context
import { SpinnerProvider } from '../components/Spinner/SpinnerContext';

// Style
import './style.css';

const App = () => {
    const isAuthenticated = true;

    return (
        <>
            <SpinnerProvider>
            { isAuthenticated ? <Private/> : <Public/> }
            </SpinnerProvider>
        </>
    );
};

export default App;
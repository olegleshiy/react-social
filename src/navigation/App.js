// Core
import React, {useEffect} from 'react';

// Route
import { Private, Public } from './index';

// Context
//import { SpinnerProvider } from '../components/Spinner/SpinnerContext';

// Style
import './style.css';

const App = (props) => {
    console.log("prrrr", props);
    const isAuthenticated = true;

    useEffect(() => {

    }, [])

    return (
        <>
            { props.isAuthenticated ? <Private {...props}/> : <Public {...props}/> }
        </>
    );
};

export default App;

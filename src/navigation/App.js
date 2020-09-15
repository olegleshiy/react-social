// Core
import React, {useEffect} from 'react';

// Route
import { Private, Public } from './index';

// Style
import './style.css';

const App = (props) => {

    useEffect(() => {
        props.initialize()
    }, [])

    return (
        <>
            { props.isAuthenticated ? <Private { ...props }/> : <Public {...props}/> }
        </>
    );
};

export default App;

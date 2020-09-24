// Core
import React, {useEffect} from 'react';
//import * as axios from 'axios';
// Route
import { Private, Public } from './index';

// Style
import './style.css';

const App = (props) => {

    useEffect(() => {
        props.initialize();
        // axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
        //     withCredentials: true,
        // }).then(res => console.log('res', res))
        props.auth();
    }, [])

    return (
        <>
            { props.isAuthenticated ? <Private { ...props }/> : <Public { ...props }/> }
        </>
    );
};

export default App;

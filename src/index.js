import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './navigation/App';
import * as serviceWorker from './serviceWorker';

import store from './init/store';

render(
    <React.StrictMode>
        <Provider store={ store }>
            <Router>
                <App/>
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

//If you want your app to work offline and load faster, you can change
//unregister() to register() below. Note this comes with some pitfalls.
//Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

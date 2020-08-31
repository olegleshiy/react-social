// Core
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { book } from './book';

// Page
import { Home, NewPassword, Dialogs } from '../page';

const Private = () => {
    return (
        <Switch>
            <Route exact path={ book.home } component={ Home }/>
            <Route path={ book.dialogs } component={ Dialogs }/>
            <Route path={ book.newPassword } component={ NewPassword }/>
        </Switch>
    );
};

export default Private;

// Core
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { book } from './book';

// Page
import { Home, NewPassword, Dialogs, Profile, Users } from '../page';

const Private = (props) => {

    return (
        <Switch>
            <Route
                exact
                path={ book.home }
                render={ () => <Home {...props}/> }
            />
            <Route
                path={ book.dialogs }
                render={ () => <Dialogs {...props} /> }
            />
            <Route
                path={ book.users }
                render={ () => <Users {...props}/> }
            />
            <Route
                path={ book.profile }
                render={ () => <Profile {...props}/> }
            />
            <Route
                path={ book.newPassword }
                component={ NewPassword }
            />
        </Switch>
    );
};

export default Private;

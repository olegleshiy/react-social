// Core
import React from 'react';

// Page
import { Login, SignUp, ResetPassword } from '../page';
import { Route, Switch, Redirect } from 'react-router-dom';
import { book } from './book';

const Public = () => {
    return (
        <Switch>
            <Route exact path={ book.login } component={ Login }/>
            <Route exact path={ book.signUp } component={ SignUp }/>
            <Route path={ book.resetPassword } component={ ResetPassword }/>
            <Redirect to={ book.login }/>
        </Switch>
    );
};

export default Public;

// Core
import React from 'react';

// Page
import { Login, SignUp, ResetPassword } from '../page';
import { Route, Switch, Redirect } from 'react-router-dom';
import { book } from './book';

const Public = () => {
    return (
        <Switch>
            <Route exact path={ book.login } render={ () => <Login />}/>
            <Route exact path={ book.signUp } render={ () => <SignUp /> }/>
            <Route path={ book.resetPassword } render={ () => <ResetPassword /> }/>
            <Redirect to={ book.login }/>
        </Switch>
    );
};

export default Public;

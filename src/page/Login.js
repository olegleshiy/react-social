// Core
import React from 'react';

// Components
import { Footer, Header, LoginForm, Spinner } from '../components';

const Login = () => {
    return (
        <div className={ 'wrapper-auth' }>
            <Spinner />
            <Header />
            <LoginForm />
            <Footer />
        </div>
    );
};

export default Login;

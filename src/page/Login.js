// Core
import React from 'react';

// Components
import { Footer, Header, LoginForm, Spinner } from '../components';

const Login = React.memo((props) => {
    return (
        <div className={ 'wrapper-auth' }>
            <Spinner />
            <Header {...props}/>
            <LoginForm />
            <Footer />
        </div>
    );
});

export default Login;

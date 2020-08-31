// Core
import React from 'react';

// Components
import { Footer, Header, SignUpForm, Spinner } from '../components';

const SignUp = () => {
    return (
        <div className={ 'wrapper-auth' }>
            <Spinner />
            <Header />
            <SignUpForm />
            <Footer />
        </div>
    );
};

export default SignUp;

// Core
import React from 'react';

// Components
import { Footer, Header, SignUpForm, Spinner } from '../components';

const SignUp = (props) => {
    return (
        <div className={ 'wrapper-auth' }>
            <Spinner />
            <Header {...props}/>
            <SignUpForm />
            <Footer />
        </div>
    );
};

export default SignUp;

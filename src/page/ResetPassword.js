// Core
import React from 'react';

// Components
import { Footer, Header, ResetPasswordForm, Spinner } from '../components';

const ResetPassword = () => {
    return (
        <div className={ 'wrapper-auth' }>
            <Spinner />
            <Header />
            <ResetPasswordForm />
            <Footer />
        </div>
    );
};

export default ResetPassword;

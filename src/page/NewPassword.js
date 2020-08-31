// Core
import React from 'react';

// Components
import { Footer, Header, NewPasswordForm, Spinner } from '../components';

const NewPassword = () => {
    return (
        <div className={ 'wrapper-auth' }>
            <Spinner />
            <Header />
            <NewPasswordForm />
            <Footer />
        </div>
    );
};

export default NewPassword;

// Core
import React from 'react';

// Components
import { Footer, Header, ResetPasswordForm, Spinner } from '../components';

const ResetPassword = React.memo((props) => {
    return (
        <div className={ 'wrapper-auth' }>
            <Spinner />
            <Header {...props}/>
            <ResetPasswordForm />
            <Footer />
        </div>
    );
});

export default ResetPassword;

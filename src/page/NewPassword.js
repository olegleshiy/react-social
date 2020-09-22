// Core
import React from 'react';

// Components
import { Footer, Header, NewPasswordForm, Spinner } from '../components';

const NewPassword = React.memo((props) => {
    return (
        <div className={ 'wrapper-auth' }>
            <Spinner />
            <Header {...props}/>
            <NewPasswordForm />
            <Footer />
        </div>
    );
});

export default NewPassword;

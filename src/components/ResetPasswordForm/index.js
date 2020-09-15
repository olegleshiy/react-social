// Core
import React from 'react';

// Style
import Styles from './style.module.css';

const ResetPasswordForm = () => {
    return (
        <div className={'wrapper-form'}>
            <form className={ Styles.resetPasswordForm }>
                <h1>Reset Password</h1>
                <input type='text' placeholder='Email'/>
                <button className={ Styles.btn }>Send</button>
            </form>
        </div>
    );
};

export default ResetPasswordForm;

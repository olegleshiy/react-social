// Core
import React from 'react';

// Style
import Styles from './style.module.css';

const ResetPasswordForm = () => {
    return (
        <div className={Styles.wrapper}>
            <form className={ Styles.loginForm }>
                <h1>Reset Password</h1>
                <input type='text' placeholder='Email'/>
                <button className={ Styles.btn }>Send</button>
            </form>
        </div>
    );
};

export default ResetPasswordForm;

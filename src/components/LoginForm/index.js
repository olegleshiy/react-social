// Core
import React from 'react';

// Style
import Styles from './style.module.css';

const LoginForm = () => {
    return (
        <div className={Styles.wrapper}>
            <form className={ Styles.loginForm }>
                <h1>Login</h1>
                <input type='text' placeholder='Email'/>
                <input type='text' placeholder='Password'/>
                <button className={ 'btn btn--width' }>Login</button>
            </form>
        </div>
    );
};

export default LoginForm;

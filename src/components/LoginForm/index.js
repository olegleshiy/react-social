// Core
import React from 'react';

// Style
import Styles from './style.module.css';

const LoginForm = () => {
    return (
        <div className={ 'wrapper-form' }>
            <form className={ Styles.loginForm }>
                <h1>Login</h1>
                <input type='text' placeholder='Email'/>
                <input type='text' placeholder='Password'/>
                <button
                    className={ 'btn btn--width' }

                >Login</button>
                <div className={ Styles.rememberBlock }>
                    <input id='remember' type='checkbox' />
                    <label htmlFor='remember'>
                        Remember me
                    </label>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;

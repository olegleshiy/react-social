// Core
import React from 'react';

// Style
import Styles from './style.module.css';

const SignUpForm = () => {
    return (
        <div className={'wrapper-form'}>
            <form className={ Styles.signUpForm }>
                <h1>Sign Up</h1>
                <input type='text' placeholder='First Name'/>
                <input type='text' placeholder='Last Name'/>
                <input type='file' placeholder='Download avatar'/>
                <input type='text' placeholder='Email'/>
                <input type='text' placeholder='Password'/>
                <button className={ 'btn btn--width' }>Sign up</button>
            </form>
        </div>
    );
};

export default SignUpForm;

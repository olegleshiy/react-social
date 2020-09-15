// Core
import React from 'react';

// Style
import Styles from './style.module.css';

const NewPasswordForm = () => {
    return (
        <div className={'wrapper-form'}>
            <form className={ Styles.newPasswordForm }>
                <h1>New Password</h1>
                <input type='password' placeholder='Password'/>
                <input type='password' placeholder='Confirm Password'/>
                <button className={ 'btn btn--width' }>Save</button>
            </form>
        </div>
    );
};

export default NewPasswordForm;

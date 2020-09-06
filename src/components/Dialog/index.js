// Core
import React from 'react';

// Components
import {
    DialogItem,
    MessageItem
} from '../index';

// Style
import Styles from './style.module.css';

const Dialog = (props) => {

    return (
        <div className={ Styles.dialogs }>
            <DialogItem users={ props.users }/>
            <MessageItem
                {...props}
            />
        </div>
    );
};

export default Dialog;
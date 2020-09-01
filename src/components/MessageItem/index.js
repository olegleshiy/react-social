// Core
import React from 'react';

// Style
import Styles from './style.module.css';

const MessageItem = (props) => {
    const listMessage = props.dataMessage.map(msg => {
        return (
            <div className={ Styles.messageItem } key={ msg.id }>
                <img className={ Styles.avatar }
                     src={ msg.avatar }
                     alt=''/>
                <p className={ Styles.message }>{ msg.message }</p>
            </div>
        );
    });

    return (
        <div className={ Styles.chat }>
            { listMessage }
        </div>
    )
}

export default MessageItem;

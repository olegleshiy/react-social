// Core
import React from 'react';

// Style
import Styles from './style.module.css';

const MessageItem = (props) => {
    const { usersMessage, newMessageText, addMessage, updateNewMessageText } = props;

    const listMessage = usersMessage.map(msg => {
        return (
            <div className={ Styles.messageItem } key={ msg.id }>
                <img className={ Styles.avatar }
                     src={ msg.avatar }
                     alt=''/>
                <p className={ Styles.message }>{ msg.message }</p>
            </div>
        );
    });

    const textareaMessageRef = React.createRef();

    const handleCreateMessage = (e) => {
        e.preventDefault();
        addMessage(textareaMessageRef.current.value);
    }

    const handleWriteMessage = () => {
        updateNewMessageText(textareaMessageRef.current.value);
    }

    return (
        <div className={ Styles.chat }>
            <div>
                { listMessage }
            </div>
            <form className={ Styles.chatMessage }>
                <textarea
                    ref={textareaMessageRef}
                    name='post'
                    id='post'
                    value={newMessageText}
                    className={ Styles.messageField }
                    placeholder='Your news...'
                    onChange={ handleWriteMessage }
                />
                <button
                    className={ 'btn' }
                    onClick={ handleCreateMessage }
                >Send</button>
            </form>
        </div>
    )
}

export default MessageItem;

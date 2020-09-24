// Core
import React from 'react';

// Style
import Styles from './style.module.css';

const PostCreator = (props) => {
    //const [message, setMessage] = useState('');
    const {addPost, updateNewPostText, newPostText} = props;

    const textareaPostRef = React.createRef();
    const handleCreatePost = (e) => {
        e.preventDefault();

        let message = textareaPostRef.current.value;
        addPost(message);
    };
    const handleWriteMessage = () => {
        let text = textareaPostRef.current.value;
        updateNewPostText(text)
    };

    return (
        <div className={ Styles.posts }>
            <div className={ 'field-group' }>
                <textarea
                    ref={ textareaPostRef }
                    name='post'
                    id='post'
                    value={ newPostText }
                    className={ Styles.post }
                    placeholder='Your news...'
                    onChange={ handleWriteMessage }
                />
                <button
                    className={ 'btn' }
                    onClick={ handleCreatePost }
                >Send
                </button>
            </div>
        </div>
    );
};

export default PostCreator;
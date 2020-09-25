// Core
import React, { Component } from 'react';

// Style
import Styles from './style.module.css';

class ProfileStatus extends Component {
    state = {
        editMode: false,
        status: 'Hello World',
    };

    componentDidMount() {

    }

    handleStatus = () => {
        this.setState({
            editMode: !this.state.editMode,
        });
    };

    render() {

        return (
            <div className={ Styles.profileStatus }>
                {
                    this.state.editMode ?
                        <input type="text" value={ this.state.status } onBlur={ this.handleStatus }
                               autoFocus={ true } /> :
                        <p onDoubleClick={ this.handleStatus }>{ this.state.status }</p>
                }

            </div>
        );
    }
}

export default ProfileStatus;

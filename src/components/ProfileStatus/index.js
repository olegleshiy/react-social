// Core
import React, { Component } from 'react';

// Style
import Styles from './style.module.css';

class ProfileStatus extends Component {
    state = {
        editMode: false,
        status: this.props.status,
    };
    componentDidMount() {
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            });
        }
    }

    handleStatus = () => {
        this.setState({
            editMode: !this.state.editMode,
        });
        this.props.updateStatus(this.state.status);
    };
    handleStatusChange = (e) => {
        this.setState({
            status: e.target.value,
        })
    }

    render() {

        return (
            <div className={ Styles.profileStatus }>
                {
                    this.state.editMode ?
                        <input type="text" value={ this.state.status } onBlur={ this.handleStatus } onChange={this.handleStatusChange}
                               autoFocus={ true } /> :
                        <p onDoubleClick={ this.handleStatus }>{ this.props.status }</p>
                }

            </div>
        );
    }
}

export default ProfileStatus;

import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { book } from '../navigation/book';

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export const AuthContainer = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.isAuthenticated) return <Redirect to={book.login}/>
            return <Component { ...this.props } />
        }
    }
    return connect(mapStateToProps)(RedirectComponent);
}

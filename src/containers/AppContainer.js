import { connect } from 'react-redux';
import { compose } from 'redux';
import App from '../navigation/App';
import { initialize } from '../bll/auth/thunk/initialize';
import { auth } from '../bll/auth/thunk/auth';

const mapStateToProps = state => ({
    fetching: state.ui.fetching,
    isAuthenticated: state.auth.isAuthenticated,
    isInitialized: state.auth.isInitialized,
});

const mapDispatchToProps = {
    initialize,
    auth,
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(App);
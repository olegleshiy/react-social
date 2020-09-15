import { connect } from 'react-redux';
import App from '../navigation/App';
import { initialize } from '../bll/auth/thunk/initialize';

const mapStateToProps = state => ({
    fetching: state.ui.fetching,
    isAuthenticated: state.auth.isAuthenticated,
    isInitialized: state.auth.isInitialized,
});

const mapDispatchToProps = {
    initialize
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
import { connect } from 'react-redux';
import App from '../navigation/App';

const mapStateToProps = state => ({
    fetching: state.ui.fetching,
    isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {

};

export default connect(
    mapStateToProps,
    null
)(App);
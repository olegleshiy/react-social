import { connect } from 'react-redux';
import { App } from '../navigation/App';
import { actions } from '../bll/profile/actions';

const mapStateToProps = state => ({
    fetching: state.spinner.fetching,
});

const mapDispatchToProps = dispatch => ({
    fetchingStart: () => {
        return dispatch(actions.fetchingStartAC())
    },
    fetchingStop: () => {
        return dispatch(actions.fetchingStopAC())
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
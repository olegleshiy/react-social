// Core
import React from 'react';

// Components
import { Spinner, Footer, Header, Navbar } from '../components';

// Container
import UsersContainer from '../containers/UsersContainer';

const Users = React.memo((props) => {

    return (
        <div className={ 'wrapper' }>
            <Spinner {...props}/>
            <Header {...props}/>
            <Navbar/>
            <UsersContainer />
            <Footer/>
        </div>
    );
});

export default Users;

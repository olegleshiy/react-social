// Core
import React, { useEffect } from 'react';

// Components
import { Spinner, Footer, Header, Navbar } from '../components';
import { useSpinner } from '../components/Spinner/SpinnerContext';

// Container
import UsersContainer from '../containers/UsersContainer';

const Users = () => {

    const toggle = useSpinner();

    useEffect(() => {
        toggle.toggle();
    });

    return (
        <div className={ 'wrapper' }>
            <Spinner/>
            <Header/>
            <Navbar/>
            <UsersContainer />
            <Footer/>
        </div>
    );
};

export default Users;

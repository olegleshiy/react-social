// Core
import React, { useEffect } from 'react';

// Components
import { Spinner, Composer, Footer, Header, Navbar, Dashboard } from '../components';
import { useSpinner } from '../components/Spinner/SpinnerContext';

const Home = () => {
    const toggle = useSpinner();

    useEffect(() => {
        toggle.toggle();
    })

    return (
        <div className={ 'wrapper' }>
            <Spinner />
            <Header />
            <Navbar/>
            <Dashboard />
            <Footer />
        </div>
    );
};

export default Home;

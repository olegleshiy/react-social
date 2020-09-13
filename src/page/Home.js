// Core
import React, { useEffect } from 'react';

// Components
import { Spinner, Footer, Header, Navbar } from '../components';
//import { useSpinner } from '../components/Spinner/SpinnerContext';

// Container
import DashboardContainer from '../containers/DashboardContainer';

const Home = (props) => {

    // const toggle = useSpinner();
    //
    // useEffect(() => {
    //     toggle.toggle();
    // });

    return (
        <div className={ 'wrapper' }>
            <Spinner {...props}/>
            <Header/>
            <Navbar/>
            <DashboardContainer />
            <Footer/>
        </div>
    );
};

export default Home;

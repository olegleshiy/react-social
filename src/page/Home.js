// Core
import React, { useEffect } from 'react';

// Components
import { Spinner, Footer, Header, Navbar, Catcher } from '../components';
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
        <Catcher>
            <div className={ 'wrapper' }>
                <Spinner {...props}/>
                <Header/>
                <Navbar/>
                <DashboardContainer />
                <Footer/>
            </div>
        </Catcher>
    );
};

export default Home;

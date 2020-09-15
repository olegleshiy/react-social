// Core
import React from 'react';

// Components
import { Spinner, Footer, Header, Navbar, Catcher } from '../components';

// Container
import DashboardContainer from '../containers/DashboardContainer';

const Home = (props) => {

    return (
        <Catcher>
            <div className={ 'wrapper' }>
                <Spinner {...props}/>
                <Header {...props}/>
                <Navbar/>
                <DashboardContainer />
                <Footer/>
            </div>
        </Catcher>
    );
};

export default Home;

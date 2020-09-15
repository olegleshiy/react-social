// Core
import React from 'react';

// Components
import { Spinner, Footer, Header, Navbar } from '../components';

// Container
import ProfileContainer from '../containers/ProfileContainer';

const Profile = (props) => {

    return (
        <div className={ 'wrapper profile-page' }>
            <Spinner {...props}/>
            <Header {...props}/>
            <Navbar/>
            <ProfileContainer />
            <Footer/>
        </div>
    );
};

export default Profile;

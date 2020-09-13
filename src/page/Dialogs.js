// Core
import React, { useEffect } from 'react';

// Components
import { Spinner, Footer, Header, Navbar } from '../components';
//import { useSpinner } from '../components/Spinner/SpinnerContext';

// Container
import DialogContainer from '../containers/DialogContainer';

const Dialogs = (props) => {
    // const toggle = useSpinner();
    //
    // useEffect(() => {
    //     toggle.toggle();
    // })

    return (
        <div className={ 'wrapper' }>
            <Spinner {...props} />
            <Header />
            <Navbar/>
            <DialogContainer />
            <Footer />
        </div>
    );
};

export default Dialogs;
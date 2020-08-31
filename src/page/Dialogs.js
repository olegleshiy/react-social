// Core
import React, {useEffect} from 'react';

// Components
import { Spinner, Composer, Footer, Header, Navbar, Content, Dialog } from '../components';
import { useSpinner } from '../components/Spinner/SpinnerContext';

const Dialogs = () => {
    const toggle = useSpinner();

    useEffect(() => {
        toggle.toggle();
    })

    return (
        <div className={ 'wrapper' }>
            <Spinner />
            <Header />
            <Navbar/>
            <Dialog />
            <Footer />
        </div>
    );
};

export default Dialogs;
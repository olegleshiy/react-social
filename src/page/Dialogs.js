// Core
import React from 'react';

// Components
import { Spinner, Footer, Header, Navbar } from '../components';

// Container
import DialogContainer from '../containers/DialogContainer';

const Dialogs = React.memo((props) => {

    return (
        <div className={ 'wrapper' }>
            <Spinner {...props} />
            <Header {...props}/>
            <Navbar/>
            <DialogContainer />
            <Footer />
        </div>
    );
});

export default Dialogs;
// Core
import React, { Component } from 'react';

// Style
import Styles from './style.module.css';

//Components
import ProfileStatus from '../ProfileStatus';

class MyProfile extends Component {
    state = {}

    componentDidMount() {
    }

    render() {

        return (
            <>
                <div className={ Styles.banner }>
                    <h1 className={ Styles.title }>Dashboard</h1>
                </div>
                <div className={ Styles.info }>
                    <img
                        src={`${'https://t4.ftcdn.net/jpg/01/70/37/67/240_F_170376778_WdB63Jlfx1eQnzTBnjc9JFzIpfMWLMti.jpg'}`}
                        alt=''
                        className={ Styles.avatar }
                    />
                    <div className={ Styles.userInfo }>
                        <h3 className={ Styles.titleName }>Oleh Zahrebelnyi</h3>
                        <p className={ Styles.infoAddress }>Kyiv, Ukraine</p>
                        <ProfileStatus />
                    </div>
                </div>
            </>
        );
    }
}

export default MyProfile;

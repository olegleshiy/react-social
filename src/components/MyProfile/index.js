// Core
import React, { Component } from 'react';

// Style
import Styles from './style.module.css';

class MyProfile extends Component {
    componentDidMount() {
        console.log('->', this.props);
        //this.props.fetchUser(this.props.match.params.id);
    }

    render() {
        // const { user: { photos, fullName, aboutMe } } = this.props;
        // if (!this.props.user) {
        //     return <div>Loading...</div>;
        // }
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
                    </div>
                </div>
            </>
        );
    }
}

export default MyProfile;

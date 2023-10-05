import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import HomeHeader from '../HomePage/HomeHeader';
import './ContactPage.scss'


class ContactPage extends Component {

    render() {
        const { isLoggedIn } = this.props;
        return (
            <>
                <HomeHeader
                    isShowBanner={false}
                />
                <div className='doctor-detail-container'>  ContactPage</div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LANGUAGES, USER_ROLE } from '../utils'
class HomeUser extends Component {

    render() {
        const { isLoggedIn, userInfo } = this.props;
        let linkToRedirect = isLoggedIn ? '/home' : '/home';
        // console.log(userInfo)
        // if (userInfo && !_.isEmpty(userInfo)) {
        //     role = userInfo.roleId;
        //     console.log('role', role)
        //     if (role === USER_ROLE.ADMIN && isLoggedIn)
        //         linkToRedirect = '/system/user-manage'
        //     if (role === USER_ROLE.USER && isLoggedIn)
        //         linkToRedirect = '/home'
        // } else {
        //     linkToRedirect = '/home'
        // }

        return (
            <Redirect to={linkToRedirect} />
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeUser);

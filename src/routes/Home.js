import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {

    render() {
<<<<<<< HEAD
        const { isLoggedIn, systemMenuPath } = this.props;
        let linkToRedirect = isLoggedIn ? '/system/user-manage' : '/home';
=======
        const { isLoggedIn, isAdmin } = this.props;
        let linkToRedirect = isLoggedIn ? '/home' : '/home';
>>>>>>> ad91e21 (sua trang admin)

        return (
            <Redirect to={linkToRedirect} />
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        isAdmin: state.app.isAdmin,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

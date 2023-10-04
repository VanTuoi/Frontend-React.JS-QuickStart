import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class HomeAdmin extends Component {

    render() {
        const { isLoggedIn, systemMenuPath } = this.props;
        let linkToRedirect = isLoggedIn ? '/system/overview' : '/login';

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

export default connect(mapStateToProps, mapDispatchToProps)(HomeAdmin);

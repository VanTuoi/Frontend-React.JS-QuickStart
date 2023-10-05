import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';

import HomePage from '../containers/User/HomePage/HomePage'
import DetailProduct from '../containers/User/ProductDetailPage/DetailProduct'
import InforUser from '../containers/User/InforUser/InforUser'
import ContactPage from '../containers/User/ContactPage/ContactPage'
import Cart from '../containers/User/Cart/Cart'

import './System.scss'

class Home extends Component {
    render() {
        const { systemMenuPath, isLoggedIn } = this.props;
        return (
            <>
                <div className="system-container">
                    <div className="system-list">
                        <Switch>
                            <Route path="/home/homepage" component={HomePage} />
                            <Route path="/home/cart" component={Cart} />
                            <Route path="/home/infor" component={InforUser} />
                            <Route path="/home/detail-product/:id" component={DetailProduct} />
                            {/* <Route component={() => { return (<Redirect to={systemMenuPath} />) }} /> */}
                        </Switch>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

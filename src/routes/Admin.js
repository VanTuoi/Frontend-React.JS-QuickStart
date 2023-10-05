import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';

import Header from '../containers/Admin/Header/Header';
// import ManageDoctor from '../containers/System/Admin/ManageDoctor'

import Overview from '../containers/Admin/Overview'
import ManageUser from '../containers/Admin/ManageUser'
import ApproveOrder from '../containers/Admin/ApproveOrder'
import ImportGoods from '../containers/Admin/ImportGoods'
import LookUpGoods from '../containers/Admin/LookUpGoods'
import LookUpOrder from '../containers/Admin/LookUpOrder'
import ManageBanner from '../containers/Admin/ManageBanner'
import ManageProduct from '../containers/Admin/ManageProduct'
import ManageProductFramework from '../containers/Admin/ManageProductFramework'
import PromotionTrademark from '../containers/Admin/PromotionTrademark'
import PromotionProduct from '../containers/Admin/PromotionProduct'
import SalesStatistics from '../containers/Admin/SalesStatistics'
import './System.scss'

class Admin extends Component {
    render() {
        const { systemMenuPath, isLoggedIn } = this.props;
        let linkToRedirect = '/login';
        { console.log('r', systemMenuPath, isLoggedIn) }
        if (isLoggedIn === true) {
            return (
                <>
                    <Header />
                    <div className="system-container">
                        <div className="system-list">
                            <Switch>
                                <Route path="/admin/overview" component={Overview} />
                                <Route path="/admin/user-manage" component={ManageUser} />
                                <Route path="/admin/manage-product" component={ManageProduct} />
                                <Route path="/admin/manage-banner" component={ManageBanner} />
                                <Route path="/admin/manage-product-framework" component={ManageProductFramework} />
                                <Route path="/admin/promotion-trademark" component={PromotionTrademark} />
                                <Route path="/admin/promotion-product" component={PromotionProduct} />
                                <Route path="/admin/approve-order" component={ApproveOrder} />
                                <Route path="/admin/look-up-order" component={LookUpOrder} />
                                <Route path="/admin/import-goods" component={ImportGoods} />
                                <Route path="/admin/look-up-goods" component={LookUpGoods} />
                                <Route component={() => { return (<Redirect to={systemMenuPath} />) }} />
                            </Switch>
                        </div>
                    </div>
                </>
            );
        } else {
            return (
                <Redirect to={linkToRedirect} />
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        systemMenuPath: state.app.systemMenuPath,
        isLoggedIn: true    // error
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);

import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import UserManage from '../containers/System/Admin/UserManage';
import UserRedux from '../containers/System/Admin/UserRedux';

import Header from '../containers/Header/Header';
import ManageDoctor from '../containers/System/Admin/ManageDoctor'

import Overview from '../containers/System/Overview'
import ManageUser from '../containers/System/ManageUser'
import ApproveOrder from '../containers/System/ApproveOrder'
import ImportGoods from '../containers/System/ImportGoods'
import LookUpGoods from '../containers/System/LookUpGoods'
import LookUpOrder from '../containers/System/LookUpOrder'
import ManageBanner from '../containers/System/ManageBanner'
import ManageProduct from '../containers/System/ManageProduct'
import ManageProductFramework from '../containers/System/ManageProductFramework'
import PromotionTrademark from '../containers/System/PromotionTrademark'
import PromotionProduct from '../containers/System/PromotionProduct'
import SalesStatistics from '../containers/System/PromotionTrademark'
import './System.scss'

class System extends Component {
    render() {
        const { systemMenuPath, isLoggedIn } = this.props;
        return (
            <>
                {isLoggedIn && <Header />}
                <div className="system-container">
                    <div className="system-list">
                        <Switch>
                            <Route path="/system/overview" component={Overview} />
                            <Route path="/system/user-manage" component={ManageUser} />
                            <Route path="/system/manage-product" component={ManageProduct} />
                            <Route path="/system/manage-banner" component={ManageBanner} />
                            <Route path="/system/manage-product-framework" component={ManageProductFramework} />
                            <Route path="/system/promotion-trademark" component={PromotionTrademark} />
                            <Route path="/system/promotion-product" component={PromotionProduct} />
                            <Route path="/system/approve-order" component={ApproveOrder} />
                            <Route path="/system/look-up-order" component={LookUpOrder} />
                            <Route path="/system/import-goods" component={ImportGoods} />
                            <Route path="/system/look-up-goods" component={LookUpGoods} />
                            <Route path="/system/sales-statistics" component={ManageDoctor} />
                            {/*SalesStatistics  */}
                            <Route component={() => { return (<Redirect to={systemMenuPath} />) }} />
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

export default connect(mapStateToProps, mapDispatchToProps)(System);

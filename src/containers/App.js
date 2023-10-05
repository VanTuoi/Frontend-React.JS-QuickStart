import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { history } from '../redux'
import { ToastContainer } from 'react-toastify';
import CustomScrollbars from '../components/CustomScrollbars.js'

import { userIsAuthenticated, userIsNotAuthenticated, userIsAdmin, userIsNotAdmin, userIsAuthenticatedRedirect } from '../hoc/authentication';

import { path } from '../utils'

import Home from '../routes/Home';
import Admin from '../routes/Admin';
import Register from './Auth/Register';
import Login from './Auth/Login';

class App extends Component {

    handlePersistorState = () => {
        const { persistor } = this.props;
        let { bootstrapped } = persistor.getState();
        if (bootstrapped) {
            if (this.props.onBeforeLift) {
                Promise.resolve(this.props.onBeforeLift())
                    .then(() => this.setState({ bootstrapped: true }))
                    .catch(() => this.setState({ bootstrapped: true }));
            } else {
                this.setState({ bootstrapped: true });
            }
        }
    };

    componentDidMount() {
        this.handlePersistorState();
    }

    render() {
        return (
            <Fragment>
                <Router history={history}>
                    <div className="main-container">
                        <div className="content-container">
                            <CustomScrollbars style={{ height: '100vh', width: '100%' }}>
                                <Switch>
                                    {/* <Route path={path.LOGIN} component={userIsNotAuthenticated(Login)} /> */}
                                    <Route path={'/login'} exact component={(Login)} />
                                    <Route path={'/register'} exact component={(Register)} />
                                    <Route path={'/admin'} component={(Admin)} />   {/* admin */}
                                    <Route path={'/home'} component={(Home)} />
                                </Switch>
                            </CustomScrollbars>
                        </div>
                        <ToastContainer
                            position='bottom-right'
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                    </div>
                </Router>
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        started: state.app.started,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
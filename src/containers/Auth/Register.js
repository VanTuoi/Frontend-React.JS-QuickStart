import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Register.scss';
import { FormattedMessage } from 'react-intl';
import { handleRegisterApi } from '../../services/useService'


class Register extends Component {
    constructor(props) {
        super(props);
        this.btnRegister = React.createRef();
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
            errMessage: '',
        }
    }
    handleOnchangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleOnchangPassword = (event) => {

        this.setState({
            password: event.target.value
        })
    }
    handleRegister = async () => {
    }
    handleShowHirePassword() {
        this.setState({
            isShowPassword: !this.state.isShowPassword,
        })
    }
    render() {

        return (
            <div className='Register-background'>
                <div className='Register-container'>
                    <div className='Register-content row'>
                        Register
                    </div>
                </div>
            </div >
        )
    }
}
const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};
const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

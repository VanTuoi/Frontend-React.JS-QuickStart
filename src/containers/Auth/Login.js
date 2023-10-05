import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import LoginServiceUser from '../../services/userService'


class Login extends Component {
    constructor(props) {
        super(props);
        this.btnLogin = React.createRef();
        this.state = {
            phonenumber: '',
            checkphonenumber: true,
            password: '',
            checkpassword: true,
            isShowPassword: false,
            errMessage: '',
        }
    }
    handleOnchangePhoneNumber = (event) => {
        this.setState({
            phonenumber: event.target.value
        })
        // console.log(event.target.value)
    }
    handleOnchangePassword = (event) => {

        if (event.target.value === '') {
            this.setState({
                password: event.target.value,
                checkpassword: false,
            })
            event.preventDefault();
        } else {
            this.setState({
                password: event.target.value,
                checkpassword: true,
            })
        }
    }

    handleOnchangePhoneNumber = (event) => {

        if (event.target.value === '') {
            this.setState({
                phonenumber: event.target.value,
                checkphonenumber: false,
            })
            event.preventDefault();
        } else {
            this.setState({
                phonenumber: event.target.value,
                checkphonenumber: true,
            })
        }
    }

    handleLogin = async () => {
        // this.props.history.push(`/home/homepage`);
        console.log(this.state)
        this.setState({
            errMessage: '',
        })
        try {
            let data = await LoginServiceUser(this.state.phonenumber, this.state.password);
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.message,
                })
            }
            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user);
                this.props.adminLoginSuccess(data.user);
                console.log('login success');
            }
        } catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.message,
                    })
                }
            }
            console.log('error', error.response);
        }
    }

    handleShowHirePassword() {
        this.setState({
            isShowPassword: !this.state.isShowPassword,
        })
    }
    handleGoToRegister() {
        this.props.history.push(`/register`);
    }
    render() {
        let { phonenumber, checkphonenumber, password, checkpassword } = this.state;
        return (
            <div className='login-background'>
                <div className='login-container'>
                    <div className='login-content row'>
                        <div className='col-12 text-center text-login'>Đăng nhập</div>
                        <div className='col-12 form-group login-input'>
                            <label htmlFor='input-phonenumber'>Số điện thoại:</label>
                            <input type='tel'
                                className={checkphonenumber === true ? 'form-control' : 'form-control form-control-error'}
                                placeholder={checkphonenumber === true ? 'Nhập số điện thoại để đăng nhập' : 'Không được để trống số điện thoại'}
                                id='input-phonenumber'
                                value={this.state.phonenumber}
                                onChange={(event) => this.handleOnchangePhoneNumber(event)}
                            />
                        </div>

                        <div className='col-12 form-group login-input'>
                            <label htmlFor='custom-input-password'>Mật khẩu:</label>
                            <div className='custom-input-password'>
                                <input type={this.state.isShowPassword ? "text" : "password"}
                                    className={checkpassword === true ? 'form-control' : 'form-control form-control-error'}
                                    placeholder={checkpassword === true ? 'Nhập mật khẩu để đăng nhập' : 'Không được để trống mật khẩu'}
                                    id='custom-input-password'
                                    value={this.state.password}
                                    onChange={(event) => this.handleOnchangePassword(event)}
                                />
                                <span
                                    onClick={() => this.handleShowHirePassword()}
                                >
                                    <i className={this.state.isShowPassword ? "far fa-eye" : "far fa-eye-slash"}></i>
                                </span>
                            </div>
                        </div>

                        <div className='col-12' style={{ color: 'red' }}>
                            {this.state.errMessage}
                        </div>
                        <div className='col-12 '>
                            <button
                                className='btn-login'
                                onClick={() => this.handleLogin()}
                            >Đăng nhập</button>
                        </div>
                        <div className='col-12 text-center forgot-password'>
                            <span className='text-other-login'><a href="#">Quên mật khẩu</a></span>
                        </div>
                        <div className='col-12 text-center' >
                            Bạn chưa có tài khoản <></>
                            <a className='text-primary' onClick={(() => this.handleGoToRegister())}>Đăng ký</a>
                        </div>
                        <span className='col-12 text-center mt-3'>Hoặc đăng nhập với:</span>
                        <div className='col-12 social-login text-center'>
                            <i className="fab fa-google-plus-g google"></i>
                            <i className="fab fa-facebook-f facebook"></i>
                        </div>
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
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
        adminLoginSuccess: (userInfo) => dispatch(actions.adminLoginSuccess(userInfo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

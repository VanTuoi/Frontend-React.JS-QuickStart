import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Register.scss';
import { FormattedMessage } from 'react-intl';
import { RegisterService } from '../../services/userService'
import { toast } from 'react-toastify';

class Register extends Component {

    constructor(props) {
        super(props);
        this.btnRegister = React.createRef();
        this.state = {
            firstname: '',
            checkfirstname: true,
            lastname: '',
            checklastname: true,
            password: '',
            checkpassword: true,
            passwordconfirm: '',
            checkpasswordconfirm: true,
            phonenumber: '',
            checkphonenumber: true,
            checkphonenumberincorrect: true,
            email: '',
            checkemail: true,
            checkemailincorrect: true,
            errMessage: '',
            gender: 'Male',
            isShowPassword: false,
            isShowPasswordConfirm: false,
        }
        // this.onChangeValueGender = this.onChangeValueGender.bind(this);
    }
    handleOnchangeFirstName = (event) => {

        if (event.target.value === '') {
            this.setState({
                firstname: event.target.value,
                checkfirstname: false,


            })
            event.preventDefault();

        } else {
            this.setState({
                firstname: event.target.value,
                checkfirstname: true,
            })
        }

    }


    handleOnchangeLastName = (event) => {
        if (event.target.value === '') {
            this.setState({
                lastname: event.target.value,
                checklastname: false,
            })
            event.preventDefault();
        } else {
            this.setState({
                lastname: event.target.value,
                checklastname: true,
            })
        }
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

    handleOnchangePasswordConfirm = (event) => {

        if (event.target.value === '' || this.state.password !== event.target.value) {
            this.setState({
                passwordconfirm: event.target.value,
                checkpasswordconfirm: false,
            })
            event.preventDefault();
        } else {
            this.setState({
                passwordconfirm: event.target.value,
                checkpasswordconfirm: true,
            })
        }
    }

    handleOnchangePhoneNumber = (event) => {

        const phonenumbercorrect = /^(?:\+?84|0)(?:\d{9}|\d{10})$/;
        let phonenumber = event.target.value;
        if (event.target.value !== '') {
            if (phonenumbercorrect.test(phonenumber) == true) {
                this.setState({
                    phonenumber: event.target.value,
                    checkphonenumber: true,
                    checkphonenumberincorrect: true,
                })
            }
            else {
                this.setState({
                    phonenumber: event.target.value,
                    checkphonenumber: true,
                    checkphonenumberincorrect: false,
                })
                //toast.error('Phone number incorrect');
                event.preventDefault();
            }
        } else {
            this.setState({
                phonenumber: event.target.value,
                checkphonenumber: false,
                checkphonenumberincorrect: false,
            })
            event.preventDefault();
        }
    }

    handleOnchangeEmail = (event) => {
        const emailcorrect = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
        let email = event.target.value;
        if (event.target.value !== '') {
            if (emailcorrect.test(email) == true) {
                this.setState({
                    email: event.target.value,
                    checkemail: true,
                    checkemailincorrect: true,
                })
            }
            else {
                this.setState({
                    email: event.target.value,
                    checkemail: true,
                    checkemailincorrect: false,
                })
                event.preventDefault();
            }
        } else {
            this.setState({
                email: event.target.value,
                checkemail: false,
                checkemailincorrect: false,
            })
            event.preventDefault();
        }

    }

    // isValidInputs = () => {
    //     // if (!firstname) {
    //     //     toast.error("Frist Name is required");
    //     //     return false;
    //     // }
    //     if (!lastname) {
    //         toast.error("Last Name is required");
    //         return false;
    //     }
    //     if (!password) {
    //         toast.error("Password is required");
    //         return false;
    //     }
    //     if (!passwordconfirm) {
    //         toast.error("Confirm Password is required");
    //         return false;
    //     }
    //     if (!phonenumber) {
    //         toast.error("Phone is required");
    //         return false;
    //     }
    //     if (!email) {
    //         toast.error("Email is required");
    //         return false;
    //     }
    //     return true;
    // }
    handleRegister = async (event) => {
        // let check = this.isValidInputs();
        // let userData = { firstname, lastname, password, passwordconfirm, phonenumber, email };

        console.log('run', this.state)
        this.setState({
            username: event.target.value
        })
    }
    handleOnchangPassword = (event) => {

        this.setState({
            gender: event.target.value
        })
        console.log(event.target.value);
    }

    handleShowHirePassword() {
        this.setState({
            isShowPassword: !this.state.isShowPassword,
        })
    }
    handleShowHirePasswordConfirm() {
        this.setState({
            isShowPasswordConfirm: !this.state.isShowPasswordConfirm,
        })
    }
    handleGoToLogin() {
        this.props.history.push(`/login`);
    }

    render() {
        let { checkfirstname, checklastname, checkpassword, checkpasswordconfirm, checkphonenumber, checkemail, gender, checkemailincorrect } = this.state;
        return (
            <div className='register-background'>
                <div className='register-container'>
                    <div className='register-content row'>
                        <div className='col-12 text-center text-register'>Đăng ký tài khoản</div>

                        <div className='col-12 text-center text-register container-fnln'>
                            <div className='col-6 form-group register-input container-fnln-one' >
                                {/* <label>Họ:</label> */}
                                <input type='text'
                                    className={checkfirstname === true ? 'form-control' : 'form-control form-control-error'}
                                    placeholder={checkfirstname === true ? 'Họ' : 'Không được để trống họ'}
                                    value={this.state.firstname}
                                    onChange={(event) => this.handleOnchangeFirstName(event)}
                                />

                            </div>


                            <div className='col-6 form-group register-input container-fnln-two'>
                                {/* <label>:Tên</label> */}
                                <input type='text'
                                    className={checklastname === true ? 'form-control' : 'form-control form-control-error'}
                                    placeholder={checklastname === true ? 'Tên' : 'Không được để trống tên'}
                                    value={this.state.lastname}
                                    onChange={(event) => this.handleOnchangeLastName(event)}
                                />
                            </div>
                        </div>

                        <div className='col-12 form-group register-input'>
                            {/* <label>Mật khẩu:</label> */}
                            <div className='custom-input-password'>
                                <input type={this.state.isShowPassword ? "text" : "password"}
                                    className={checkpassword === true ? 'form-control' : 'form-control form-control-error'}
                                    placeholder={checkpassword === true ? 'Nhập mật khẩu' : 'Không được để trống mật khẩu'}
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

                        <div className='col-12 form-group register-input'>
                            {/* <label>Xác nhận mật khẩu:</label> */}
                            <div className='custom-input-password'>
                                <input type={this.state.isShowPasswordConfirm ? "text" : "password"}
                                    className={checkpasswordconfirm === true ? 'form-control' : 'form-control form-control-error'}
                                    placeholder={checkpasswordconfirm === true ? 'Nhập lại mật khẩu' : 'Không được để trống mật khẩu'}
                                    value={this.state.passwordconfirm}
                                    onChange={(event) => this.handleOnchangePasswordConfirm(event)}
                                />
                                <span
                                    onClick={() => this.handleShowHirePasswordConfirm()}
                                >
                                    <i className={this.state.isShowPasswordConfirm ? "far fa-eye" : "far fa-eye-slash"}></i>
                                </span>
                            </div>
                        </div>

                        <div className='col-12 form-group register-input'>
                            {/* <label>Số điện thoại:</label> */}
                            <input type='tel'
                                className={checkphonenumber === true ? 'form-control' : 'form-control form-control-error'}
                                placeholder={checkphonenumber === true ? 'Nhập số điện thoại' : 'Không được để trống SĐT'}
                                value={this.state.phonenumber}
                                onChange={(event) => this.handleOnchangePhoneNumber(event)}
                            />
                        </div>

                        <div className='col-12 form-group register-input'>
                            {/* <label>Email:</label> */}
                            <input type='email'
                                className={checkemail === true ? 'form-control' : 'form-control form-control-error'}
                                placeholder={checkemail === true ? 'Nhập email' : 'Không được để trống email'}

                                value={this.state.email}
                                onChange={(event) => this.handleOnchangeEmail(event)}
                            />
                        </div>

                        <div className='col-12 form-group register-input '>
                            <label htmlFor='gender'>Giới tính:  </label>
                            <div onChange={this.onChangeValueGender} className='radio-group container-gender'>
                                <div className='col-3 container-gender-one'>
                                    <label htmlFor="Male">
                                        <input type="radio" id="Male" name="gender" value="Male"
                                            defaultChecked={gender === 'Male' ? true : false}
                                        />
                                        Nam</label>
                                </div>
                                <div className='col-3 container-gender-two'>
                                    <label htmlFor="Female">
                                        <input type="radio" id="Female" name="gender" value="Female"
                                            defaultChecked={gender === 'Female' ? true : false} />
                                        Nữ</label>
                                </div>
                                <div className='col-3 container-gender-three'>
                                    <label htmlFor="Others">
                                        <input type="radio" id="Others" name="gender" value="Others"
                                            defaultChecked={gender === 'Others' ? true : false} />
                                        Khác</label>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-12 '>
                        <button

                            className='btn-register'
                            onClick={(event) => this.handleRegister(event)}
                        >Đăng ký</button>
                    </div>

                    <div className='col-12 text-center' >
                        Bạn đã có tài khoản <></>
                        <a className='text-primary' onClick={() => this.handleGoToLogin()}>Đăng nhập</a>
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

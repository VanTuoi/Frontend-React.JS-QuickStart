import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES } from '../../utils'
import { changeLanguageApp } from '../../store/actions'
import { withRouter } from 'react-router';
import * as actions from "../../store/actions";

import './HomeHeader.scss'

class HomeHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: ''
        }
    }
    changeLanguage(language) {
        this.props.changeLanguageAppRedux(language);

    }
    handleLogin = () => {
        this.props.history.push(`/login`);
    }
    handleClickCart = () => {
        this.props.history.push(`/cart`);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.isLoggedIn !== this.props.isLoggedIn) {
            this.setState({
                isLoggedIn: this.props.isLoggedIn,
            })
        }
    }
    render() {
        const { isLoggedIn, language, userInfo, processLogout } = this.props;
        // console.log(userInfo)
        return (
            <>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i className='fas fa-bars'></i>
                            <div className='header-logo'>Logo</div>
                        </div>
                        <div className='center-content text-center'>
                            <div className='chird-content'>
                                <input></input>
                                <button>Tìm kiếm</button>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='chird-content'>Tài khoản đơn hàng</div>
                            <div className='chird-content' onClick={() => this.handleClickCart()}>Giỏ hàng <></></div>
                            <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}><span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span></div>
                            <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}><span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span></div>
                            {/* bổ sung login + logout*/}
                            {
                                isLoggedIn !== true ?
                                    <div onClick={() => this.handleLogin()}>Login </div>
                                    :
                                    <div className="btn btn-logout" onClick={processLogout}>
                                        <i className="fas fa-sign-out-alt"></i>
                                    </div>
                            }
                        </div>
                    </div>


                </div>
            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        userInfo: state.user.userInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));

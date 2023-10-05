import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES } from '../../../utils'
import { changeLanguageApp } from '../../../store/actions'
import { withRouter } from 'react-router';
import * as actions from "../../../store/actions";
import logo from '../../../assets/logo/PhoneZoneLogo.png'
import './HomeHeader.scss'
import Select from "react-select"

class HomeHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: '',
            listProducts: [],
            listProductsSelect: [],
            selectedOption: '',
        }
    }

    async componentDidMount() {
        this.props.getAllUser();
        this.setState({
            listProducts: this.props.listProducts
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listProducts !== this.props.listProducts) {
            let dataSelect = this.builDataInputSelect(this.props.listProducts);
            this.setState({
                listProducts: this.props.listProducts,
                listProductsSelect: dataSelect,
            })
        }
        if (prevProps.isLoggedIn !== this.props.isLoggedIn) {
            this.setState({
                isLoggedIn: this.props.isLoggedIn,
            })
        }
    }
    builDataInputSelect = (inputData) => {
        let result = [];
        if (inputData && inputData.length > 0) {
            inputData.map((item, index) => {
                let object = {};
                object.label = item.nameProduct
                object.value = item.codeProduct;
                result.push(object)
            })

        }
        return result
    }
    changeLanguage(language) {
        this.props.changeLanguageAppRedux(language);

    }
    handleLogin = () => {
        this.props.history.push(`/login`);
    }
    handleClickCart = () => {
        this.props.history.push(`/home/cart`);
    }
    handleClickHome = () => {
        this.props.history.push(`/home/homepage`);
    }
    handleClickInfor = () => {
        this.props.history.push(`/home/infor`);
    }
    handleViewDetailProduct = (product) => {
        //product.id
        this.props.history.push(`/home/detail-product/${1}`);          // luuw nut quay ve
    }
    handleChange = selectedOption => {
        this.setState({
            selectedOption
        })
        this.props.listUsers.map((item, index) => {
            if (item.id === selectedOption.value) {
                this.handleViewDetailProduct(item)
                return;
            }
        })
    }
    render() {
        const { isLoggedIn, language, userInfo, processLogout } = this.props;
        let selectedOption = this.state.selectedOption;
        // console.log(userInfo)
        return (
            <>
                <div className='home-header-container'>
                    <div className='home-header-content group'>
                        <div className='left-content'>
                            <div className='header-logo' onClick={() => this.handleClickHome()}>
                                <img src={logo} style={{ title: 'Trang chủ PhoneZone' }} />
                            </div>
                        </div>
                        <div className='center-content text-center'>
                            <div className='chird-content search-header'>
                                <Select
                                    className='searchTerm'
                                    // className="col-12"
                                    placeholder='Bạn cần tìm gì?'
                                    value={this.state.selectedOption}
                                    onChange={() => this.handleChange()}
                                    options={this.state.listProductsSelect}
                                />
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='chird-content text-center' onClick={() => this.handleClickInfor()}>
                                <div className='account-order ' >
                                    &nbsp;Tài khoản &#38; &nbsp;&nbsp;đơn hàng
                                </div>
                            </div>
                            <div className='chird-content'>
                                <div className='text-center' onClick={() => this.handleClickCart()}>
                                    <i className='fa fa-shopping-cart'></i>
                                    <span>Giỏ hàng</span>
                                </div>
                            </div>
                            <div className={language === LANGUAGES.VI ? 'language-vi active' : 'language-vi'}><span onClick={() => this.changeLanguage(LANGUAGES.VI)}>VN</span></div>
                            <div className={language === LANGUAGES.EN ? 'language-en active' : 'language-en'}><span onClick={() => this.changeLanguage(LANGUAGES.EN)}>EN</span></div>
                            {/* bổ sung login + logout*/}
                            {
                                isLoggedIn !== true ?
                                    <div className='btn-login' onClick={() => this.handleLogin()}>Login </div>
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
        listProducts: state.admin.products
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language)),
        getAllUser: () => dispatch(actions.getAllUser()),
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));

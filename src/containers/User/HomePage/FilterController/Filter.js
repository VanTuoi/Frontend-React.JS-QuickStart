import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES } from '../../../../utils'
import { changeLanguageApp } from '../../../../store/actions'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { set } from 'lodash';
import './Filter.scss'
import imageblackFriday from '../../../../assets/Banners/blackFriday.gif'
import company_Apple from '../../../../assets/Companys/Apple.jpg'
import company_Samsung from '../../../../assets/Companys/Samsung.jpg'
import company_Oppo from '../../../../assets/Companys/Oppo.jpg'
import company_Noki from '../../../../assets/Companys/Nokia.jpg'
import company_Huawei from '../../../../assets/Companys/Huawei.jpg'
import company_Xixaomi from '../../../../assets/Companys/Xiaomi.png'
import company_Realme from '../../../../assets/Companys/Realme.png'
import company_Vivo from '../../../../assets/Companys/Vivo.jpg'
import company_Philips from '../../../../assets/Companys/Philips.jpg'
import company_Mobell from '../../../../assets/Companys/Mobell.jpg'
import company_Mobiistar from '../../../../assets/Companys/Mobiistar.jpg'
import company_Itel from '../../../../assets/Companys/Itel.jpg'
import company_Coolpad from '../../../../assets/Companys/Coolpad.png'
import company_HTC from '../../../../assets/Companys/HTC.jpg'
import company_Motorola from '../../../../assets/Companys/Motorola.jpg'




class Filter extends Component {

    render() {
        return (
            <div className='filter-container'>
                <div className='child-container-top'>
                    <img src={imageblackFriday} alt='image black Friday'></img>
                </div>
                <div className='child-container-bottom group flexContain'>
                    <a href='#'>
                        <img src={company_Apple}></img>
                    </a>
                    <a href='#'>
                        <img src={company_Samsung}></img>
                    </a>
                    <a href='#'>
                        <img src={company_Oppo}></img>
                    </a>
                    <a href='#'>
                        <img src={company_Noki}></img>
                    </a>
                    <a href='#'>
                        <img src={company_Huawei}></img>
                    </a>
                    <a href='#'>
                        <img src={company_Apple}></img>
                    </a>
                    <a href='#'>
                        <img src={company_Xixaomi}></img>
                    </a>
                    <a href='#'>
                        <img src={company_Realme}></img>
                    </a>
                    <a href='#'>
                        <img src={company_Vivo}></img>
                    </a>
                    <a href='#'>
                        <img src={company_Philips}></img>
                    </a>
                    <a href='#'>
                        <img src={company_Mobell}></img>
                    </a>
                    <a href='#'>
                        <img src={company_Mobiistar}></img>
                    </a>
                    <a href='#'>
                        <img src={company_Itel}></img>
                    </a>
                    <a href='#'>
                        <img src={company_Coolpad}></img>
                    </a>
                    <a href='#'>
                        <img src={company_HTC}></img>
                    </a>
                    <a href='#'>
                        <img src={company_Motorola}></img>
                    </a>

                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

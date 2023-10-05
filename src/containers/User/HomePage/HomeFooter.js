import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
// import { LANGUAGES } from '../../../utils'
// import { changeLanguageApp } from '../../../store/actions'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HomeFooter.scss';
class HomeFooter extends Component {

    render() {
        let settings = this.props.settings;
        return (
            <div className='home-footer'>
                <p className='text-center'><a href='http://localhost:3000/home'>PhoneZone Store</a> &copy; 2023 </p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);

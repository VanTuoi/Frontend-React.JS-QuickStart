import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
// import { LANGUAGES } from '../../../utils'
// import { changeLanguageApp } from '../../../store/actions'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class HomeFooter extends Component {

    render() {
        let settings = this.props.settings;
        return (
            <div celassName='home-footer'>
                <p className='text-center'> &copy; 2023 Tran Van Tuoi <a>Link</a></p>
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

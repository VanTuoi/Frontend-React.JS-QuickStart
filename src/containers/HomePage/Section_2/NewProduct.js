import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES } from '../../../utils'
import { changeLanguageApp } from '../../../store/actions'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { set } from 'lodash';

class NewProduct extends Component {

    render() {
        let settings = this.props.settings;
        settings.slidesToShow = 5;
        return (
            <div className='section-share'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Sản phẩm mới</span>
                        <button className='btn-section'>Tất cả sản phẩm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...settings}>
                            <div className='section-customize'>
                                <div className="bg-image section-NewProduct" />
                                <div className='section-content'>Sản phẩm  1</div>
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image section-NewProduct" />
                                <div className='section-content'>Sản phẩm  2</div>
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image section-NewProduct" />
                                <div className='section-content'>Sản phẩm  3</div>
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image section-NewProduct" />
                                <div className='section-content'>Sản phẩm  4</div>
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image section-NewProduct" />
                                <div className='section-content'>Sản phẩm  5</div>
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image section-NewProduct" />
                                <div className='section-content'>Sản phẩm  6</div>
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image section-NewProduct" />
                                <div className='section-content'>Sản phẩm  7</div>
                            </div>
                        </Slider>
                    </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);

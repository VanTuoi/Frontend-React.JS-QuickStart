import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES } from '../../../utils'
import { changeLanguageApp } from '../../../store/actions'

import specialtyIm from '../../../assets/spaciatly/112457-co-xuong-khop.jpg'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Specialty.scss'


class Specialty extends Component {

    render() {
        let settings = this.props.settings;
        return (
            <div className='section-share section-specialty'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Chuyên khoa phổ biến</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...settings}>
                            <div className='section-customize'>
                                <div className="bg-image section-specialty" />
                                <div className='section-content'>Cơ sương khớp 1</div>
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image section-specialty" />
                                <div className='section-content'>Cơ sương khớp 2</div>
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image section-specialty" />
                                <div className='section-content'>Cơ sương khớp 3</div>
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image section-specialty" />
                                <div className='section-content'>Cơ sương khớp 4</div>
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image section-specialty" />
                                <div className='section-content'>Cơ sương khớp 5</div>
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image section-specialty" />
                                <div className='section-content'>Cơ sương khớp 6</div>
                            </div>
                            <div className='section-customize'>
                                <div className="bg-image section-specialty" />
                                <div className='section-content'>Cơ sương khớp 7</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
